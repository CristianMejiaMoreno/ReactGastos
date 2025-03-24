<?php

namespace App\Http\Controllers;

use App\Models\TipoGasto;
use Illuminate\Http\Request;
use App\Services\TipoGastoService;
use Exception;
use Inertia\Inertia;

class TipoGastoController extends Controller
{
    protected $tipocategoriaService;
    public function __construct(TipoGastoService $tipoGastoService) {
        $this->tipocategoriaService = new TipoGastoService();
    }

    /**
     * Display a listing of the resource.
     */
    public function index($request)
    {
        try{
            $tipo = $this->tipocategoriaService->tipoCategoria($request ?? new Request());

            return Inertia::render('TipoGasto/Index',[
                'TipoGasto' => $tipo
            ]);

        }catch(Exception $e){
            return response()->json([
                'message'=>'Error desconocido '.$e->getMessage()
            ],500);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(TipoGasto $tipoGasto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TipoGasto $tipoGasto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TipoGasto $tipoGasto)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TipoGasto $tipoGasto)
    {
        //
    }
}
