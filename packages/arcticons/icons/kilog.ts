import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKilogIcon],svg[arcticons-kilog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.375 4.5l8 39"></svg:path><svg:circle cx="8.875" cy="25" r=".75" fill="currentColor"></svg:circle><svg:circle cx="8.875" cy="14.75" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.875 25h25m-25-10.25h20"></svg:path>`,
})
export class ArcticonsKilogIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
