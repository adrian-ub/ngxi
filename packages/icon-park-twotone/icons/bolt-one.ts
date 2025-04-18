import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBoltOneIcon],svg[icon-park-twotone-bolt-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBoltOne0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" d="M12 12.28a.28.28 0 0 1 .28-.28h23.44a.28.28 0 0 1 .28.28V24c0 6.627-5.373 12-12 12s-12-5.373-12-12z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 12V4m8 8V4m-6 23h4m-2 9v5a3 3 0 0 0 3 3h11"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBoltOne0)"></svg:path>`,
})
export class IconParkTwotoneBoltOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
