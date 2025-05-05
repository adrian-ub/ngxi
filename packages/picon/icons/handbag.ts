import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHandbagIcon],svg[picon-handbag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4V0h4v4H5V1H3v3M1 3v4h6V3M0 8V2h8v6"></svg:path>`,
})
export class PiconHandbagIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
