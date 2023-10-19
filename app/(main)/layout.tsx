"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div
        className="w-full flex justify-center items-center h-full">
        <Spinner size="lg" />
      </div>
    );
  }

  if(!isAuthenticated) {
    return redirect("/");
  }
  return (
  <div>{children}</div>
  );
};

export default MainLayout;
