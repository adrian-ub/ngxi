import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIntellectIcon],svg[arcticons-intellect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.067 33.365c0-5.597-10.134-23.347-10.134-23.347S8.798 27.768 8.798 33.365a10.135 10.135 0 1 0 20.27 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.98 37.924a10 10 0 0 0 1.087.058a10.135 10.135 0 0 0 10.135-10.135C39.202 22.25 29.067 4.5 29.067 4.5s-3.53 6.184-6.424 12.402"></svg:path>`,
})
export class ArcticonsIntellectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
