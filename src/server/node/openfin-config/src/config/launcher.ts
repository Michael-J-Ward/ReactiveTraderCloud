import merge from 'lodash.merge'
import { OpenFinApplicationConfiguration } from '../types'
import base from './base'

/* eslint-disable @typescript-eslint/camelcase */
export default (env: string): OpenFinApplicationConfiguration => {
  const baseConfig = base(env)
  const name = `Reactive Ecosystem Launcher${env !== 'demo' ? ` (${env.toUpperCase()})` : ''}`

  return merge(baseConfig, {
    startup_app: {
      name,
      url: `https://web-${env}.adaptivecluster.com/launcher`,
      uuid: `reactive-launcher-${env}`,
      defaultWidth: 350,
      defaultHeight: 56,
      defaultTop: 160,
      defaultLeft: 30,
      autoShow: true,
      backgroundColor: '#313131',
      cornerRounding: {
        width: 4,
        height: 4
      },
      permissions: {
        System: {
          launchExternalProcess: true,
        },
      },
      saveWindowState: false,
      resizable: false,
      shadow: true,
      frame: false,
      alwaysOnTop: true,
      icon: `https://web-${env}.adaptivecluster.com/static/media/adaptive.ico`,
      applicationIcon: `https://web-${env}.adaptivecluster.com/static/media/adaptive-icon-256x256.png`,
      contextMenu: true,
      accelerator: {
        devtools: true,
        reload: true,
        reloadIgnoringCache: true,
        zoom: true,
      },
    },
    runtime: {
      arguments: '--remote-debugging-port=9222',
      version: '15.80.49.30',
    },
    shortcut: {
      company: 'Adaptive Consulting',
      icon: `https://web-${env}.adaptivecluster.com/static/media/adaptive.ico`,
      name,
    },
    appAssets: [
      {
        src: `https://web-${env}.adaptivecluster.com/plugin/add-in.zip`,
        alias: 'excel-api-addin',
        version: '2.0.0',
        forceDownload: true
      },
      {
        src: `https://web-${env}.adaptivecluster.com/plugin/LimitChecker.zip`,
        alias: 'LimitChecker',
        version: '1.6.0',
        target: 'LimitChecker.application',
      },
    ],
  })
}
