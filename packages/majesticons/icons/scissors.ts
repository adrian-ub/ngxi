import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsScissorsIcon],svg[majesticons-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M3 7a4 4 0 1 1 7.446 2.032L12 10.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-9.26 9.261a4 4 0 1 1-1.414-1.414L10.585 12l-1.554-1.554A4 4 0 0 1 3 7zm11.707 6.293a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.414-1.414l-5-5z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsScissorsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
