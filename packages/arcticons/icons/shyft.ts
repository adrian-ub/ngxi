import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShyftIcon],svg[arcticons-shyft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m43.5 17.668l-9.543-9.543v6.231h-6.583a6.623 6.623 0 0 0-6.623 6.623h13.206v6.231zm-39 12.664l9.543 9.543v-6.231h6.583a6.623 6.623 0 0 0 6.624-6.623h0h-13.207V20.79z"></svg:path>`,
})
export class ArcticonsShyftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
