import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGaanaIcon],svg[arcticons-gaana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.573 43.5c9.669-.879 16.701 3.083 18.46-9.67l4.394-29.007C27.071 4.389 20.484 3.51 19.16 9.218l-2.637 15.389c-1.312 6.153 6.154 5.708 14.944 5.708"></svg:path>`,
})
export class ArcticonsGaanaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
