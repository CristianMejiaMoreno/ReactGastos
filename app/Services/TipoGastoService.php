<?php

namespace App\Services;
use App\Models\TipoGasto;

class TipoGastoService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function tipoCategoria($request)
    {
        $per_page = $request->per_page ?? 10;
        $search = $request->search;

        $query = TipoGasto::query();

        if(!empty($search)){
            $query->where(function($q) use ($search){
                $q->where('nombre', 'like', "%{$search}%");
            });
        }

        $tipocategoria = $query->paginate($per_page)->appends($request->except('page'));

        return $tipocategoria; 

    }
}
