"use client";

import React from "react";
import { Button } from "./button";
import { getAurinkoAuthUri } from "@/lib/aurinko";

export function LinkButton() {
  return (
    <Button
      onClick={async () => {
        const response = await getAurinkoAuthUri("Google");
        window.location.href = response;
      }}
    >
      LinkButton
    </Button>
  );
}
