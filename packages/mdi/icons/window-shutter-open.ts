import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWindowShutterOpenIcon],svg[mdi-window-shutter-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18v4h-2v12h-2V8H7v12H5V8H3zm5 5h8v2H8z"></svg:path>`,
})
export class MdiWindowShutterOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
