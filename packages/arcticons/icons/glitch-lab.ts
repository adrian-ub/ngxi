import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGlitchLabIcon],svg[arcticons-glitch-lab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.884 34.73a8.197 8.197 0 0 0 9.76-9.76l6.562-6.562a16.775 16.775 0 0 1-22.884 22.885Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.782 35.833a16.772 16.772 0 1 1 22.884-22.885l-6.562 6.562a8.191 8.191 0 1 0-9.76 9.76Z"></svg:path>`,
})
export class ArcticonsGlitchLabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
