import React from "react";
import { Panel, PagePanelTitle, ContentCard } from "@components";
import "./index.less";

function Index() {
  const content = React.useMemo(() => {
    return (
      <ContentCard title="主题">
        <h4>get /topics 主题首页</h4>

        <p>接收 get 参数</p>
        <ul>
          <li>page Number 页数</li>
          <li>tab String 主题分类。目前有 ask share job good</li>
          <li>limit Number 每一页的主题数量</li>
          <li>
            mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有
            markdown 格式文本。
          </li>
        </ul>
        <p>
          示例：<a href="/api/v1/topics">/api/v1/topics</a>
        </p>

        <h4>get /topic/:id 主题详情</h4>

        <p>接收 get 参数</p>
        <ul>
          <li>
            mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有
            markdown 格式文本。
          </li>
          <li>
            accesstoken String
            当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的
            is_collect 以及 replies 列表中的 is_uped 值。
          </li>
        </ul>
        <p>
          示例：
          <a href="/api/v1/topic/5433d5e4e737cbe96dcef312">
            /api/v1/topic/5433d5e4e737cbe96dcef312
          </a>
        </p>
      </ContentCard>
    );
  }, []);

  return (
    <div className="public-api-page">
      <Panel header={<PagePanelTitle pageTitle="API" />}>
        <p>以下 api 路径均以 https://cnodejs.org/api/v1 为前缀</p>
        <p>
          update 2019-03-21:
          涉及发帖和发评论的接口都已经下线了，太多人为了测试客户端乱发帖了。
        </p>

        {content}
        {content}
        {content}
      </Panel>
    </div>
  );
}

export default Index;
