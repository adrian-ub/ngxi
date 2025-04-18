import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOrangeTvIcon],svg[arcticons-orange-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.484 10.428h39v22.886h-39zm6.876 22.886h25.353v4.304H11.36z"></svg:path><svg:circle cx="24.036" cy="35.466" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsOrangeTvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
