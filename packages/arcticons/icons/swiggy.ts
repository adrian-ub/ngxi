import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSwiggyIcon],svg[arcticons-swiggy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.223 17.723a13.223 13.223 0 0 0-26.446 0C10.777 27.773 24 43.5 24 43.5s13.223-15.727 13.223-25.777"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.199 18.479H25.955v-5.924M14.502 29.442h10.122v4.554"></svg:path>`,
})
export class ArcticonsSwiggyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
