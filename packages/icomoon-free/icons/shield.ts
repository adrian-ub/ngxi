import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeShieldIcon],svg[icomoon-free-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 0L8 2L1 0S.93.808 1 2l7 2.189L15 2c.07-1.192 0-2 0-2M1.128 3.049C1.503 6.966 2.901 13.553 8 16c5.099-2.448 6.497-9.034 6.872-12.951L8 5.633z"></svg:path>`,
})
export class IcomoonFreeShieldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
