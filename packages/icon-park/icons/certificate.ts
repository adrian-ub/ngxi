import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCertificateIcon],svg[icon-park-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M26 36H6C4.89543 36 4 35.1046 4 34V8C4 6.89543 4.89543 6 6 6H42C43.1046 6 44 6.89543 44 8V34C44 35.1046 43.1046 36 42 36H34"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 14H36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 21H18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 28H16"></svg:path><svg:path fill="#2F88FF" d="M30 33C33.3137 33 36 30.3137 36 27C36 23.6863 33.3137 21 30 21C26.6863 21 24 23.6863 24 27C24 30.3137 26.6863 33 30 33Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M30 40L34 42V31.4722C34 31.4722 32.8594 33 30 33C27.1406 33 26 31.5 26 31.5V42L30 40Z"></svg:path></svg:g>`,
})
export class IconParkCertificateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
