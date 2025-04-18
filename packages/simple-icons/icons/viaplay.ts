import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsViaplayIcon],svg[simple-icons-viaplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.277 6.638C.474 8.243 0 10.067 0 12s.474 3.757 1.277 5.362L12 12ZM12 0a11.97 11.97 0 0 0-7.769 2.845l12.547 6.748v4.814L4.231 21.155C6.31 22.942 9.046 24 12 24c6.638 0 12-5.362 12-12S18.638 0 12 0"></svg:path>`,
})
export class SimpleIconsViaplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
