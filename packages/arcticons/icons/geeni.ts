import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGeeniIcon],svg[arcticons-geeni-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.982 20.136a7.76 7.76 0 1 1 1.04-3.88m7.956-.001a7.76 7.76 0 1 1 1.04 3.88m-1.04-3.88l15.521-.04m-23.477.161H4.502m5.894 18.265c8.564 6.621 17.654 6.35 27.207 0"></svg:path>`,
})
export class ArcticonsGeeniIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
