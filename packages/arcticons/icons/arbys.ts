import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArbysIcon],svg[arcticons-arbys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.76 38.6c-4.49-2.2-14.36-4.73-14.36 0s8.6 4.9 14.36 4.9c8.48 0 14.84-2.2 14.84-5.38s-5.6-5.8-5.6-5.8v-16.4c0-6-3.1-11.42-6.77-11.42s.24 4.61.4 6.07c.1.94 0 1.76-1.26 1.76c-2.29 0-3.13-5.06-5.09-5.06S13.8 12 13.8 30.61"></svg:path>`,
})
export class ArcticonsArbysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
