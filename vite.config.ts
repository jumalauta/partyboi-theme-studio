import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            name: 'watch-extra-dirs',
            configureServer(server) {
                server.watcher.add(path.resolve(__dirname, 'theme'));
                server.watcher.on('change', (file) => {
                    if (file.endsWith('.css') || file.endsWith('theme.json')) {
                        server.ws.send({
                            type: 'full-reload',
                            path: '*'
                        });
                    }
                });
            }
        }
    ],
    resolve: {
        alias: [
            {
                find: /^\/assets\/screen\/screen.js$/,
                replacement: (_match) => {
                    return path.resolve(__dirname, 'src', `screenMock.ts`);
                }
            },
            {
                find: /^\/assets\/screen\/(.+)$/,
                replacement: (_match, p1) => {
                    return path.resolve(__dirname, 'theme', p1);
                }
            }
        ]
    }
})
