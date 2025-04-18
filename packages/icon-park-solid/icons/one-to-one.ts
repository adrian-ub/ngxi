import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidOneToOneIcon],svg[icon-park-solid-one-to-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSOneToOne0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M42 7H6a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12 20.58L16 18v12m15-9.42L35 18v12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 20v1m0 6v1"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSOneToOne0)"></svg:path>`,
})
export class IconParkSolidOneToOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
