import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonNewIcon],svg[meteocons-moon-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="16.9 56.2" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M384 256a128 128 0 0 0-128-128c-169.8 6.7-169.7 249.3 0 256a128 128 0 0 0 128-128"></svg:path>`,
})
export class MeteoconsMoonNewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
