import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeArrowsHIcon],svg[prime-arrows-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.69 11.71a.8.8 0 0 0-.16-.24l-4-4a.75.75 0 1 0-1.06 1.06l2.72 2.72H5.81l2.72-2.72a.75.75 0 0 0-1.06-1.06l-4 4a.8.8 0 0 0-.16.24a.73.73 0 0 0 0 .58a.8.8 0 0 0 .16.24l4 4a.75.75 0 0 0 1.06 0a.75.75 0 0 0 0-1.06l-2.72-2.72h12.38l-2.72 2.72a.75.75 0 0 0 0 1.06a.75.75 0 0 0 1.06 0l4-4a.8.8 0 0 0 .16-.24a.73.73 0 0 0 0-.58"></svg:path>`,
})
export class PrimeArrowsHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
