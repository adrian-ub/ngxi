import { bootstrapApplication } from '@angular/platform-browser'

import { AppComponent } from './app/app.component'
import { appConfig } from './app/app.config'

import '@unocss/reset/tailwind.css'
import './styles.css'
import 'uno.css'
import 'zone.js'

bootstrapApplication(AppComponent, appConfig).catch(err =>
  console.error(err),
)
