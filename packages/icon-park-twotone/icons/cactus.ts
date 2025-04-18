import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCactusIcon],svg[icon-park-twotone-cactus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCactus0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8 43h32M6 16c0 5.5.5 14 10 14m26-16c0 5 0 20-10 20"></svg:path><svg:path fill="#555" d="M24 5a8 8 0 0 0-8 8v30h16V13a8 8 0 0 0-8-8Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCactus0)"></svg:path>`,
})
export class IconParkTwotoneCactusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
