import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAlignHorizontalLeftIcon],svg[carbon-align-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 26H11a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m0-6.001L11 20v4h15zM18 14h-7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m0-6.001L11 8v4h7zM4 2h2v28H4z"></svg:path>`,
})
export class CarbonAlignHorizontalLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
