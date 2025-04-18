import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineWifiFindIcon],svg[ic-outline-wifi-find-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c4.14 0 7.88 1.68 10.59 4.39L24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98L12 21l1.41-1.42L2.93 9.08C5.45 7.16 8.59 6 12 6"></svg:path><svg:path fill="currentColor" d="M21 14c0-2.24-1.76-4-4-4s-4 1.76-4 4s1.76 4 4 4c.75 0 1.44-.21 2.03-.56L21.59 20L23 18.59l-2.56-2.56c.35-.59.56-1.28.56-2.03m-4 2c-1.12 0-2-.88-2-2s.88-2 2-2s2 .88 2 2s-.88 2-2 2"></svg:path>`,
})
export class IcOutlineWifiFindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
