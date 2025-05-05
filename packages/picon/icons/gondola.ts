import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGondolaIcon],svg[picon-gondola-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1v4H3V1M1 0v1h6V0M1 3v2h6V3M1 8L0 7V3l1-1h6l1 1v4L7 8"></svg:path>`,
})
export class PiconGondolaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
