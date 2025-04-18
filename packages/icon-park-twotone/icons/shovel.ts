import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneShovelIcon],svg[icon-park-twotone-shovel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTShovel0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M13 4h22l-1 9l-8.5 6h-3L14 13z"></svg:path><svg:path d="M24 19v11"></svg:path><svg:rect width="6" height="14" x="21" y="30" fill="#555" rx="3"></svg:rect></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTShovel0)"></svg:path>`,
})
export class IconParkTwotoneShovelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
