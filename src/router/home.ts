import { Router, Request, Response, NextFunction } from 'express';
const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({
      success: true,
      message: 'My first typeScript message.'
    });
  } catch (error) {
    next(error);
  }
});

export default router;