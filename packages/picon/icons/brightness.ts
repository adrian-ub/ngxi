import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBrightnessIcon],svg[picon-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8l2-3l-2-1l2-1l-2-3l4 2l4-2l-2 3l2 1l-2 1l2 3l-4-2m0 0c3 1 3-5 0-4"></svg:path>`,
})
export class PiconBrightnessIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
