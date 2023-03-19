import * as yup from 'yup';

export const commentSchema = yup.object({
  name: yup.string("نام کاربردی را وارد کنید").required("نام کاربری الزامی می باشد"),
  email: yup.string("ایمیل را ثبت کنید").email("ایمیل معتبر نیست").required("ایمیل الزامی می باشد"),
  text: yup.string("متن خود را بنویسید").required("متن کامنت الزامی می باشد"),
});
