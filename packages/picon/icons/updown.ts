import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconUpdownIcon],svg[picon-updown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5V1H5v4H3l2.5 3L8 5M2 3v4h1V3h2L2.5 0L0 3"></svg:path>`,
})
export class PiconUpdownIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
