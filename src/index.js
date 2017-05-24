import dva from 'dva';
import './index.css';
import articles from "./models/articles";

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/category'));
app.model(require('./models/nav'));
app.model(articles);

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
