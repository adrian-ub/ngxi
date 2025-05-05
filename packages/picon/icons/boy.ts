import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBoyIcon],svg[picon-boy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6L2 5h4M5 4V3h1v1M2 4V3h1v1M2 2c-4 7 8 7 4 0m1 0c4 8-10 8-6-1l7-1"></svg:path>`,
})
export class PiconBoyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
