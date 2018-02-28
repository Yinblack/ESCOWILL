<?php
class ControllerRoutes extends Controller
{
    public function __construct() {
        parent::__construct();
    }

    public function index()
    {
        $this->_view->titulo = 'ESCOWILL | ENVASES PET';
        $this->_view->renderizar('Header');
        $this->_view->renderizar('Home');
        $this->_view->renderizar('Footer');
    }

    public function productos()
    {
        $this->_view->titulo = 'ESCOWILL | PRODUCTOS';
        $this->_view->renderizar('Header');
        $this->_view->renderizar('Productos');
        $this->_view->renderizar('Footer');
    }

    public function detalle()
    {
        $this->_view->titulo = 'ESCOWILL | DETALLE PRODUCTO';
        $this->_view->renderizar('Header');
        $this->_view->renderizar('Detalle');
        $this->_view->renderizar('Footer');
    }

}
?>
