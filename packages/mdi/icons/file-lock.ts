import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileLockIcon],svg[mdi-file-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13c-1.4 0-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3v-1.5c0-1.4-1.4-2.5-2.8-2.5m0 1.2c.8 0 1.5.5 1.5 1.3V17h-3v-1.5c0-.8.7-1.3 1.5-1.3M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h6v-3.8c0-1 .4-1.7 1-2.2c.1-.1.2-.1.2-.2v-.3c0-2.7 2.4-4.5 4.8-4.5c.7 0 1.4.2 2 .4V8l-6-6zm7 1.5L18.5 9H13z"></svg:path>`,
})
export class MdiFileLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
