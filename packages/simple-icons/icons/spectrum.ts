import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSpectrumIcon],svg[simple-icons-spectrum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 10.2A1.8 1.8 0 0 0 1.8 12h1.8a8.4 8.4 0 0 1 8.4 8.4v1.8a1.8 1.8 0 0 0 1.8 1.8h8.4a1.8 1.8 0 0 0 1.8-1.8v-1.8C24 9.133 14.867 0 3.6 0H1.8A1.8 1.8 0 0 0 0 1.8z"></svg:path>`,
})
export class SimpleIconsSpectrumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
