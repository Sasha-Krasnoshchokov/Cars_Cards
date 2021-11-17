import React, { useState } from 'react';
import classnames from 'classnames';
import './FAQ.scss';
import questions from '../../../api/questions';
import unswers from '../../../api/unswers';

function FAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [whatOpen, setWhatOpen] = useState(0);

  const openFAQ = (event) => {
    setWhatOpen(+event.target.id);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="faq">
        <h2 className="faq__title">
          POPULAR QUESTIONS
        </h2>

        <section className="faq__question">

          {
            questions.map(question => (
              <details
                id={question.id}
                className={classnames({
                  'faq__details': true,
                  'faq__details-open': isOpen && (whatOpen === question.id),
                })}
              >

                <summary
                  onClick={(event) => openFAQ(event)}
                  id={question.id}
                  className={classnames({
                    'faq__summary': true,
                    'faq__summary-open': isOpen && (whatOpen === question.id),
                  })}
                >

                  <span id={question.id}>
                    {`${question.id}. ${question.title}`}
                  </span>

                  <div
                    id={question.id}
                    className={classnames({
                      'faq__openner': !isOpen || (whatOpen !== question.id),
                      'faq__closure': isOpen && (whatOpen === question.id),
                    })}
                  />

                </summary>

                <ul>
                  {
                    unswers.map(unswer => (
                      <li
                        key={unswer.id}
                        className="faq__text"
                      >
                        {`${question.id}.${unswer.id} ${unswer.text}`}
                      </li>
                    ))
                  }
                </ul>

              </details>
            ))
          }
        </section>

      </section>
    </>
  );
}

export default FAQ;