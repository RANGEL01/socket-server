import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensaje', ( req : Request, res : Response ) => {
    res.json({
        ok: true,
        message: 'Todo esta bien!!!'
    });
});

router.post('/mensaje', ( req : Request, res : Response ) => {
    
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok: true,
        cuerpo,
        de
    });

});

router.post('/mensaje/:id', ( req : Request, res : Response ) => {
    
    const id = req.params.id;
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok: true,
        id,
        cuerpo,
        de
    });

});

export default router;