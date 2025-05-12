import { href, Link } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes.ts";
import { CONFIG } from "@/shared/model/config.ts";
import { rqClient } from "@/shared/api/instance.ts";

function BoardsListPage() {
  const boardsQuery = rqClient.useQuery("get", "/boards");
  return (
    <div>
      <h1>Boards list {CONFIG.API_BASE_URL}</h1>

      {boardsQuery.data?.map((board) => (
        <Link to={href(ROUTES.BOARD, { boardId: board.id })}>{board.name}</Link>
      ))}
    </div>
  );
}

export const Component = BoardsListPage;
