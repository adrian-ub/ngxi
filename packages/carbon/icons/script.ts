import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonScriptIcon],svg[carbon-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.83 26l2.58-2.58L20 22l-4 4l4 4l1.42-1.41zm8.34 0l-2.58 2.58L26 30l4-4l-4-4l-1.42 1.41z"></svg:path><svg:path fill="currentColor" d="M14 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v6h2v-8a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h6Zm4-23.6l5.6 5.6H18Z"></svg:path>`,
})
export class CarbonScriptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
