import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneStrongboxIcon],svg[icon-park-twotone-strongbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTStrongbox0"><svg:g fill="none"><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3"></svg:path><svg:path fill="#fff" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 24a2 2 0 1 0 0-4a2 2 0 0 0 0 4m24-24a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 24a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTStrongbox0)"></svg:path>`,
})
export class IconParkTwotoneStrongboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
