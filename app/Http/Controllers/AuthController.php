<?php

namespace App\Http\Controllers;

use App\Events\AlumniRegistered;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $user = User::create($request->validated());
        $user->alumnus()->create($request->validated());

        AlumniRegistered::dispatch($user);

        return 'Successfully Registered';
    }

    public function login(LoginRequest $request)
    {
        if (!Auth::attempt($request->validated())) {
            throw ValidationException::withMessages([
                'email' => 'Wrong email or password.'
            ]);
        }

        return 'Successfully login';
    }

    public function logout()
    {
        Auth::guard('web')->logout();
        
        return 'Successfully logout';
    }
}
