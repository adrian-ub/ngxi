import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVeryIcon],svg[arcticons-very-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.133 5.5l14.182 37l11.692-.088l9.86-25.786l-11.083-5.234l-5.02 14.879L19.4 5.5ZM25.77 26.27L20.31 42.5"></svg:path>`,
})
export class ArcticonsVeryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
