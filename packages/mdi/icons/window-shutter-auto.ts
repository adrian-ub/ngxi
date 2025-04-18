import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWindowShutterAutoIcon],svg[mdi-window-shutter-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9zm-2.2 5.7L19 16l1.2 3.7zM7 9h8v2H7zm0 3h8v2H7zm0 3h8v1.5l-.2.5H7zm6.7 5H7v-2h7.5zM16 8H6v12H4V8H2V4h18v4h-2v4h-1.4l-.5 1.3l-.1.4z"></svg:path>`,
})
export class MdiWindowShutterAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
