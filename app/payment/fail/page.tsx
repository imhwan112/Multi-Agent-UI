"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PaymentFailPage() {
    const params = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const code = params.get("code");
        const message = params.get("message");

        console.error("❌ 결제 실패:", { code, message });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold text-red-500 mb-4">
                ❌ 결제가 실패했습니다
            </h1>

            <p className="mb-6 text-gray-600">
                결제 과정에서 오류가 발생했습니다. 다시 시도해 주세요.
            </p>

            <div className="flex gap-4">
                <button
                    onClick={() => router.back()}
                    className="bg-gray-500 text-white px-6 py-2 rounded"
                >
                    다시 결제하기
                </button>

                <button
                    onClick={() => router.push("/")}
                    className="bg-black text-white px-6 py-2 rounded"
                >
                    홈으로 이동
                </button>
            </div>
        </div>
    );
}
