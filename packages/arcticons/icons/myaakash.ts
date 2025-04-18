import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyaakashIcon],svg[arcticons-myaakash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 40.802c9.81-5.278 17.026-12.683 18.5-25.16c1.474 12.477 8.69 19.882 18.5 25.16"></svg:path><svg:circle cx="24.062" cy="7.948" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMyaakashIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
