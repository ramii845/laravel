<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EtudiantTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        DB::table("etudiant")->insert([
            "nom" => $faker->name(),
            "prenom" => $faker->name(),
            "email" => $faker->unique()->safeEmail,
            "groupe" => $faker->name(),
           ]);

    }
}
