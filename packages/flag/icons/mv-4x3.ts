import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMv4x3Icon],svg[flag-mv-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d21034" d="M0 0h640v480H0z"></svg:path><svg:path fill="#007e3a" d="M120 120h400v240H120z"></svg:path><svg:circle cx="350" cy="240" r="80" fill="#fff"></svg:circle><svg:circle cx="380" cy="240" r="80" fill="#007e3a"></svg:circle>`,
})
export class FlagMv4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
