import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPixelIconPackIcon],svg[arcticons-pixel-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="18.54" r="9.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.64 18.54V43.5m4.68 0V31.78h0c1.464.518 3.039.8 4.68.8c7.754 0 14.04-6.286 14.04-14.04S31.754 4.5 24 4.5S9.96 10.786 9.96 18.54V43.5"></svg:path>`,
})
export class ArcticonsPixelIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
