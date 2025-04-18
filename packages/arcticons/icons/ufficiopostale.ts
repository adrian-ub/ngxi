import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUfficiopostaleIcon],svg[arcticons-ufficiopostale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.346 32V16h5.342c3.082 0 5.547 2.4 5.547 5.4s-2.465 5.4-5.547 5.4h-5.342M24.765 16h10.889m-5.342 15.999V16"></svg:path>`,
})
export class ArcticonsUfficiopostaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
