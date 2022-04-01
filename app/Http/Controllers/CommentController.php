<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{

    public function view(Comment $comment)
    {
        $comment->load('comments');
        return $comment;
    }

    public function reply(Comment $comment, CommentRequest $request)
    {
        $reply = Auth::user()->comment($comment, $request->content);
        return response()->json($reply);
    }

    public function like(Comment $comment)
    {
        Auth::user()->like($comment);
        return response()->json(
            $comment->likes()->pluck('user_id')
        );
    }

    public function unlike(Comment $comment)
    {
        Auth::user()->unlike($comment);
        return response()->json(
            $comment->likes()->pluck('user_id')
        );
    }
}
