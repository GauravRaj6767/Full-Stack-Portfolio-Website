// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Load Bootstrap CSS from CDN */}
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-Mn0O3FFrNaa0jM5p/z4KzwunhI0RkyRbMKhtjqC3XKyRzC3E3y5vZV5+OrpWVK53"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Optionally include Bootstrap JS and dependencies */}
          <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-LtrjvnR4Twt/qOuYxZNn8P0+7U5q1SsmxZ2xFtnLL/D5J6CvjpAMB7tW9U30pT9I"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
