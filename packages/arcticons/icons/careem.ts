import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCareemIcon],svg[arcticons-careem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M12.652 4.328a4.68 4.68 0 0 1 5.567 2.436a4.73 4.73 0 0 1-.488 4.872a4.74 4.74 0 0 1-5.707 1.322a4.67 4.67 0 0 1-2.504-3.2a4.48 4.48 0 0 1 .417-3.133a4.9 4.9 0 0 1 2.715-2.297Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M28.936 4.6a19.9 19.9 0 0 1 12.474 8.819m1.484 18.319a19.886 19.886 0 0 1-37.787-3.706"></svg:path>`,
})
export class ArcticonsCareemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
