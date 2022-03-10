import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    name: 'Rete',
    plugins: [
        typescript()
    ],
    babelPresets: [
        require('@babel/preset-typescript')
    ],
    extensions: ['.js', '.ts']
}