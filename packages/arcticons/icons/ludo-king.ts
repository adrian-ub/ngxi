import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLudoKingIcon],svg[arcticons-ludo-king-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7.875" cy="30.887" r="5.375"></svg:circle><svg:circle cx="18.625" cy="30.887" r="5.375"></svg:circle><svg:circle cx="29.375" cy="30.887" r="5.375"></svg:circle><svg:circle cx="40.125" cy="30.887" r="5.375"></svg:circle></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.5 11.738l-3.75 5l-3.75-5l-3.75 5l-3.75-5v10.299h15z"></svg:path>`,
})
export class ArcticonsLudoKingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
