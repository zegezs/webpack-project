const loaderUtils = require('loader-utils');

module.exports = function(source) {
    const options = loaderUtils.getOptions(this);
    console.log('option',source, options);
    this.callback(null, source)
    return source
} 

/**
 *  URL-LOADER 源码示例
 *  */
// import path from 'path';

// import { getOptions } from 'loader-utils';
// import validateOptions from 'schema-utils';
// import mime from 'mime-types';

// import normalizeFallback from './utils/normalizeFallback';
// import schema from './options.json';

// function shouldTransform(limit, size) {
//   if (typeof limit === 'boolean') {
//     return limit;
//   }

//   if (typeof limit === 'string') {
//     return size <= parseInt(limit, 10);
//   }

//   if (typeof limit === 'number') {
//     return size <= limit;
//   }

//   return true;
// }

// function getMimetype(mimetype, resourcePath) {
//   if (typeof mimetype === 'boolean') {
//     if (mimetype) {
//       const resolvedMimeType = mime.contentType(path.extname(resourcePath));

//       if (!resolvedMimeType) {
//         return '';
//       }

//       return resolvedMimeType.replace(/;\s+charset/i, ';charset');
//     }

//     return '';
//   }

//   if (typeof mimetype === 'string') {
//     return mimetype;
//   }

//   const resolvedMimeType = mime.contentType(path.extname(resourcePath));

//   if (!resolvedMimeType) {
//     return '';
//   }

//   return resolvedMimeType.replace(/;\s+charset/i, ';charset');
// }

// function getEncoding(encoding) {
//   if (typeof encoding === 'boolean') {
//     return encoding ? 'base64' : '';
//   }

//   if (typeof encoding === 'string') {
//     return encoding;
//   }

//   return 'base64';
// }

// function getEncodedData(generator, mimetype, encoding, content, resourcePath) {
//   if (generator) {
//     return generator(content, mimetype, encoding, resourcePath);
//   }

//   return `data:${mimetype}${encoding ? `;${encoding}` : ''},${content.toString(
//     // eslint-disable-next-line no-undefined
//     encoding || undefined
//   )}`;
// }

// export default function loader(content) {
//   // Loader Options
//   const options = getOptions(this) || {};

//   validateOptions(schema, options, {
//     name: 'URL Loader',
//     baseDataPath: 'options',
//   });

//   // No limit or within the specified limit
//   if (shouldTransform(options.limit, content.length)) {
//     const { resourcePath } = this;
//     const mimetype = getMimetype(options.mimetype, resourcePath);
//     const encoding = getEncoding(options.encoding);

//     if (typeof content === 'string') {
//       // eslint-disable-next-line no-param-reassign
//       content = Buffer.from(content);
//     }

//     const encodedData = getEncodedData(
//       options.generator,
//       mimetype,
//       encoding,
//       content,
//       resourcePath
//     );

//     const esModule =
//       typeof options.esModule !== 'undefined' ? options.esModule : true;

//     return `${
//       esModule ? 'export default' : 'module.exports ='
//     } ${JSON.stringify(encodedData)}`;
//   }