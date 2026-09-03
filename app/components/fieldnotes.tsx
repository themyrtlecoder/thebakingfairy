import styles from '../page.module.scss';
import sendEmail from '../components/send';
import { useTransition, useState } from 'react';

const FieldNotes = ({state = 'findings'}:{state: 'findings' | 'field notes'}) => {
    const [_, startTransition] = useTransition();
    const [submit, setSubmit] = useState<null | 'pending' | 'success' | 'error' | string>(null);

    const sendNote = async (formData: FormData) => {
        if (!formData.get('note') || !formData.get('name') || !formData.get('response necessary') || !formData.get('private')) {
            setSubmit('missing required fields');
            setTimeout(() => {
                setSubmit(null);
            }, 2500);

        } else {
            startTransition(async() => {
                const res = await sendEmail(formData);
                if (res.error) {
                    setSubmit('error')
                } else {
                    setSubmit('success');
                    setTimeout(() => {
                        setSubmit(null);
                    }, 2500);
                }
            });
        }
        
    };
    
    return (
    <div className={[styles.field_notes, state === 'field notes' ? styles.active : styles.inactive].join(' ')}>
        <div className={styles.form_wrapper}>
            <form action={sendNote} className={styles.form}>
                <h2>field notes</h2>
                <h4>leave a thought, no fairy dust required!</h4>
                <fieldset>
                    <label>note *</label><br/>
                    <textarea name="note" placeholder="snack critique, encouragement, or other such delicious thoughts..."></textarea>
                </fieldset>
                <fieldset>
                    <label>name *</label><br/>
                    <input type="text" name="name" placeholder="first + last(if you're feelin' it)"/>
                </fieldset>
                <fieldset>
                    <label>are you hoping to hear back from the fairy? *</label><br/>
                    <input type="radio" name="response necessary" value="yes, please"/> <span>definitely!</span>
                    <br/>
                    <input type="radio" name="response necessary" value="doesn't matter"/> <span>no, all good!</span>
                </fieldset>
                <fieldset>
                    <label>contact info</label><br/>
                    <input type="text" name="contact" placeholder={`if regularly in contact, just say: "in the normal way"`}/>
                </fieldset>
                <fieldset>
                    <label>do you prefer to keep your note private? *</label><br/>
                    <input type="radio" name="private" value="yes, please"/> <span>yes, please</span><br/>
                    <input type="radio" name="private" value="doesn't matter"/> <span>doesn't matter</span>
                </fieldset>
                <button type="submit" onClick={()=>setSubmit('pending')}>&#91; &nbsp; {submit === 'pending' ? 'submitting' : submit === 'success' ? 'submitted!' : submit === 'error' ? 'try again :(' : submit !== null ? submit : 'submit'} &nbsp; &#93;</button>
            </form>
        </div>
    </div>
    )
}

export default FieldNotes;