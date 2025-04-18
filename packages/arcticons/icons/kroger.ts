import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKrogerIcon],svg[arcticons-kroger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 20.662c0-4.84-3.584-13.245-12.732-13.245s-13.845 7.231-13.845 13.836a11.99 11.99 0 0 1-12.423 12m0-12.453v19.783m13.845 0l-6.324-9.604"></svg:path>`,
})
export class ArcticonsKrogerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
