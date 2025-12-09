"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaymentSuccessPage() {
    const params = useSearchParams();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const paymentKey = params.get("paymentKey");
        const orderId = params.get("orderId");
        const amount = params.get("amount");

        if (!paymentKey || !orderId || !amount) {
            alert("잘못된 결제 요청입니다.");
            router.replace("/");
            return;
        }

        fetch("/api/toss/confirm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                paymentKey,
                orderId,
                amount: Number(amount),
            }),
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {loading ? (
                <div>결제 완료 처리 중...</div>
            ) : (
                <>
                    <h1 className="text-2xl font-bold mb-4">결제가 완료되었습니다</h1>
                    <button
                        onClick={() => router.push("/")}
                        className="bg-green-500 text-white px-6 py-2 rounded"
                    >
                        확인하고 홈으로 이동
                    </button>
                </>
            )}
        </div>
    );
}
