import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTriRoseIcon],svg[arcticons-tri-rose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.084 19.14A17.24 17.24 0 0 0 24 26.057a17.28 17.28 0 0 0 20.5-6.66a17.24 17.24 0 0 0-11.416-.259"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.388 32.56A17.24 17.24 0 0 0 24 26.058a17.28 17.28 0 0 0 12.67 17.439a17.24 17.24 0 0 0-3.282-10.937"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.718 36.995A17.24 17.24 0 0 0 24 26.058a17.28 17.28 0 0 0-12.67 17.439a17.24 17.24 0 0 0 9.388-6.502"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.584 26.317A17.24 17.24 0 0 0 24 26.058a17.28 17.28 0 0 0-20.5-6.66a17.24 17.24 0 0 0 9.084 6.919"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.227 15.28A17.24 17.24 0 0 0 24 26.059a17.28 17.28 0 0 0 0-21.555a17.24 17.24 0 0 0-3.773 10.778"></svg:path>`,
})
export class ArcticonsTriRoseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
