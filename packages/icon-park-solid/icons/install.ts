import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidInstallIcon],svg[icon-park-solid-install-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSInstall0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" d="M41.4 11.551L36.333 5H11.667l-5.083 6.551"></svg:path><svg:path fill="#fff" stroke="#fff" d="M6 13a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v27a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="m32 27l-8 8l-8-8m7.992-8v16"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSInstall0)"></svg:path>`,
})
export class IconParkSolidInstallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
