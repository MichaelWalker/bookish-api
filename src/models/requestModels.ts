﻿export interface EditBookRequest {
    title: string;
    author: string;
    isbn: string | null;
    coverImageUrl: string | null;
    publisher: string | null;
    publishDate: string | null;
}

export interface EditMemberRequest {
    name: string;
    email: string;
}

export interface EditCopyRequest {
    condition: "NEW" | "USED" | "POOR";
    status: "ACTIVE" | "LOST" | "REMOVED";
}