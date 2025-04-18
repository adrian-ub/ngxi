import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTapeIcon],svg[icon-park-solid-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTape0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 12a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M14.27 10c-1.696 0-2.622 1.978-1.536 3.28l1.666 2a2 2 0 0 0 1.537.72h16.126a2 2 0 0 0 1.537-.72l1.666-2c1.086-1.302.16-3.28-1.536-3.28z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 10h36"></svg:path><svg:path fill="#000" stroke="#000" d="M33 31a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-18 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTape0)"></svg:path>`,
})
export class IconParkSolidTapeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
