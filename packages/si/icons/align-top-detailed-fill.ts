import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siAlignTopDetailedFillIcon],svg[si-align-top-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.4 7h-1.8A1.6 1.6 0 0 0 14 8.6v3.8a1.6 1.6 0 0 0 1.6 1.6h1.8a1.6 1.6 0 0 0 1.6-1.6V8.6A1.6 1.6 0 0 0 17.4 7m-9 0H6.6A1.6 1.6 0 0 0 5 8.6v11.8A1.6 1.6 0 0 0 6.6 22h1.8a1.6 1.6 0 0 0 1.6-1.6V8.6A1.6 1.6 0 0 0 8.4 7"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 3a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignTopDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
