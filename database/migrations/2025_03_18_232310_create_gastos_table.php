<?php

use App\Models\TipoGasto;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('gastos', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(TipoGasto::class); 
            $table->foreignIdFor(User::class); 
                        
            // Añadir los campos para mes, quincena y año
            $table->enum('mes', ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']); // Mes del gasto
            $table->enum('quincena', ['1', '2']); 
            $table->year('anio'); 
        
            $table->string('nombre'); 
            $table->decimal('valor', 10, 2); 
        
            $table->timestamps(); 
            $table->softDeletes(); 
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gastos');
    }
};
