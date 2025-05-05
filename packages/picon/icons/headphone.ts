import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHeadphoneIcon],svg[picon-headphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v3H0C-2-3 10-3 8 8H5V5h2c1-5-7-5-6 0"></svg:path>`,
})
export class PiconHeadphoneIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
