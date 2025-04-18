import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsHotjarIcon],svg[simple-icons-hotjar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.119 9.814C12.899 8.27 16.704 6.155 16.704 0h-4.609c0 3.444-1.676 4.375-4.214 5.786C5.1 7.33 1.295 9.444 1.295 15.6h4.61c0-3.444 1.676-4.376 4.214-5.786M18.096 8.4c0 3.444-1.677 4.376-4.215 5.785c-2.778 1.544-6.585 3.66-6.585 9.815h4.609c0-3.444 1.676-4.376 4.214-5.786c2.78-1.544 6.586-3.658 6.586-9.814z"></svg:path>`,
})
export class SimpleIconsHotjarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
