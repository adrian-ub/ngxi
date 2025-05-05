import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPhoneIcon],svg[picon-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7V1H5v.5H3V1H2v6m0 1L1 7V1l1-1h4l1 1v6L6 8"></svg:path>`,
})
export class PiconPhoneIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
