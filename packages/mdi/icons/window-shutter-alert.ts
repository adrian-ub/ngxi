import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWindowShutterAlertIcon],svg[mdi-window-shutter-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h18v4h-2v12h-2V8H6v12H4V8H2zm5 5h8v2H7zm0 3h8v2H7zm13 7v-2h2v2zm0-4v-5h2v5z"></svg:path>`,
})
export class MdiWindowShutterAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
