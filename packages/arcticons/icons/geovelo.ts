import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGeoveloIcon],svg[arcticons-geovelo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.74 24.53l3.5 1.6l-1.6 3.7m-23.7-3.4a20.3 20.3 0 0 1 3.9-6.9a11.4 11.4 0 0 1 4.1-3.1c2.4-1.1 7.4-2.7 9.9-1.2c1.2 1.1-1.1 2.8-3.3 5.9a5.72 5.72 0 0 0-1.1 4.7a3.65 3.65 0 0 0 3.9 2.5a15.5 15.5 0 0 0 5.8-1.4a12 12 0 0 0 2-.9m-19.5-4.3a7.27 7.27 0 0 1 0 9.4A7.44 7.44 0 1 1 12.94 19"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.74 25.93a7.43 7.43 0 0 1 14.6-.5a7.31 7.31 0 0 1-4.3 8.4a7.41 7.41 0 0 1-9.1-2.7M14 13.63c6-.7 2.5 5.2 1.8 6"></svg:path>`,
})
export class ArcticonsGeoveloIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
