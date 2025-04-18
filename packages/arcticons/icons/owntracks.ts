import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOwntracksIcon],svg[arcticons-owntracks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.502a13.09 13.09 0 0 0-13.09 13.09c0 10.25 9.98 22.61 12.59 25.63a.59.59 0 0 0 1 0c2.55-3 12.59-15.38 12.59-25.63A13.09 13.09 0 0 0 24 4.502"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.42 21.74l5.62-6.693l5.54 6.65M24 15.047v28.404"></svg:path>`,
})
export class ArcticonsOwntracksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
