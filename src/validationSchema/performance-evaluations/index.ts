import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  evaluation_date: yup.date().nullable(),
  evaluation_score: yup.number().integer().nullable(),
  user_id: yup.string().nullable(),
  teamlead_id: yup.string().nullable(),
});
