import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinibitsIcon],svg[arcticons-minibits-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.025 37.097c-.147-12.733.443-24.483 9.145-24.483c6.539 0 5.457 14.798 9.93 14.798c5.409 0 6.195-14.798 14.651-14.798c7.867 0 4.573 23.942 4.573 23.942"></svg:path>`,
})
export class ArcticonsMinibitsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
