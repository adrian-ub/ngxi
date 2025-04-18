import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCompass2FillIcon],svg[ri-compass-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.328 4.258L10.586 12L12 13.414l7.742-7.742A9.96 9.96 0 0 1 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2c2.4 0 4.604.847 6.328 2.258"></svg:path>`,
})
export class RiCompass2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
