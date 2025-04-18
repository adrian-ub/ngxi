import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInstallIcon],svg[icon-park-install-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M41.4004 11.551L36.3332 5H11.6666L6.58398 11.551"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M6 13C6 11.8954 6.89543 11 8 11H40C41.1046 11 42 11.8954 42 13V40C42 41.6569 40.6569 43 39 43H9C7.34315 43 6 41.6569 6 40V13Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 27L24 35L16 27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M23.9917 19V35"></svg:path></svg:g>`,
})
export class IconParkInstallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
