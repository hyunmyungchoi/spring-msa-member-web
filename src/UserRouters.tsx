import { Navigate, Route, Routes } from "react-router-dom";
import ChatEntryPage from "./chat/pages/ChatEntryPage";
import UserAuthLayout from "@hyunmyungchoi/member-common/layouts/UserAuthLayout";
import UserLayout from "@hyunmyungchoi/member-common/layouts/UserLayout";
import ServiceSelectPage from "@hyunmyungchoi/member-common/pages/ServiceSelectPage";
import UserAuthPage from "@hyunmyungchoi/member-common/pages/UserAuthPage";

function UserRouters() {
    return (
        <Routes>
            <Route element={<UserAuthLayout />}>
                <Route path="/auth" element={<UserAuthPage />} />
            </Route>
            <Route element={<UserLayout />}>
                <Route path="/" element={<ServiceSelectPage />} />
                <Route path="/chat" element={<ChatEntryPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default UserRouters;
