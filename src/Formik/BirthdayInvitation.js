import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./formik.css";

const BirthdayInvitationForm = () => {
  const [alertMessage, setAlertMessage] = useState('');

  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Мин. 2 символа').required('Это поле обязательно'),
    attending: Yup.string().required('Укажите, придёте ли вы'),
    drinks: Yup.string().required('Укажите предпочтения'),
    lodging: Yup.string().required('Укажите, нужна ли ночёвка'),
    transport: Yup.string().required('Укажите, нужен ли транспорт'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      attending: '',
      drinks: '',
      lodging: '',
      transport: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      sendEmail(values);
      resetForm();
    }
  });

  function sendEmail(values) {
    const templateParams = {
      name: values.name,
      attending: values.attending,
      drinks: values.drinks,
      lodging: values.lodging,
      transport: values.transport,
    };

    emailjs.send(
      'service_a2xjb6s',
      'template_ad2fg3e',
      templateParams,
      'Kz7JwrLNtBRlTUKAE'
    )
    .then(() => setAlertMessage('Ваш ответ успешно отправлен!'))
    .catch(() => setAlertMessage('Ошибка при отправке'));
  }

  return (
    <div className="form-wrapper">
      <h1 className="form__title">Анкета гостя</h1>
      <h2 className="form__subtitle">
        Пожалуйста, подтвердите Ваше присутствие до 15.07.2025, чтобы мы могли правильно организовать мероприятие.
      </h2>

      <form className="form" onSubmit={formik.handleSubmit}>
        <label className="form__label">Ваше Имя:</label>
        <input
          name="name"
          type="text"
          className="form__input"
          placeholder="Введите ваше имя"
          autoComplete='off'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error">{formik.errors.name}</div>
        )}

        <label className="form__label">Вы сможете присутствовать на мероприятии?</label>
        <input
          name="attending"
          type="text"
          className="form__input"
          autoComplete='off'
          placeholder="Да / Нет"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.attending}
        />
        {formik.touched.attending && formik.errors.attending && (
          <div className="error">{formik.errors.attending}</div>
        )}

        <div className="bg-start">
          <label className="form__label">Напишите, пожалуйста, предпочтения по алкоголю</label>
          <input
            name="drinks"
            type="text"
            className="form__input"
            placeholder="Например: Пиво, Виски..."
            autoComplete='off'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.drinks}
          />
          {formik.touched.drinks && formik.errors.drinks && (
            <div className="error">{formik.errors.drinks}</div>
          )}

          <label className="form__label">Потребуется ли Вам место для ночевки?</label>
          <input
            name="lodging"
            type="text"
            className="form__input"
            autoComplete='off'
            placeholder="Да / Нет"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lodging}
          />
          {formik.touched.lodging && formik.errors.lodging && (
            <div className="error">{formik.errors.lodging}</div>
          )}

          <label className="form__label">Потребуется ли Вам транспорт?</label>
          <input
            name="transport"
            type="text"
            className="form__input"
            autoComplete='off'
            placeholder="Да / Нет"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.transport}
          />
          {formik.touched.transport && formik.errors.transport && (
            <div className="error">{formik.errors.transport}</div>
          )}

          <button type="submit" className="form__button">Отправить</button>

        </div>

        <p className="form_text">С любовью, Артур и Эльза</p>
        <div className="bg-image"></div>
      </form>
      {alertMessage && (
      <div
        className="modal-overlay"
          onClick={() => setAlertMessage('')}
        >
          <div
            className="modal-window"
          onClick={e => e.stopPropagation()}        >
          <p>{alertMessage}</p>
          <button onClick={() => setAlertMessage('')}>OK</button>
        </div>
      </div>
    )}
    </div>
  );
};

export default BirthdayInvitationForm;
