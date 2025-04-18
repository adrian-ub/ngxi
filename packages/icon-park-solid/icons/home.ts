import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHomeIcon],svg[icon-park-solid-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSHome0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M9 18v24h30V18L24 6z"></svg:path><svg:path fill="#000" stroke="#000" stroke-linejoin="round" d="M19 29v13h10V29z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M9 42h30"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSHome0)"></svg:path>`,
})
export class IconParkSolidHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
