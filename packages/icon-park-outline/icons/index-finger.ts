import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineIndexFingerIcon],svg[icon-park-outline-index-finger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M12.566 26.182Q10 27.941 10 32c0 4.06 4.975 11 9.462 11h11.48C35.332 43 38 39.15 38 36.06V23.01a3 3 0 0 0-3-3h-.01A2.99 2.99 0 0 0 32 23"></svg:path><svg:path d="M13.981 28.445V8.005a3 3 0 0 1 3.006-2.997a3.014 3.014 0 0 1 3.006 3.015v15.569"></svg:path><svg:path stroke-linejoin="round" d="M19.993 23.008v-3.992a3.016 3.016 0 0 1 6.03 0v3.992"></svg:path><svg:path stroke-linejoin="round" d="M26 22.716v-2.713a3 3 0 0 1 6 0v3"></svg:path></svg:g>`,
})
export class IconParkOutlineIndexFingerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
