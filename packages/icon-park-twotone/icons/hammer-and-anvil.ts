import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneHammerAndAnvilIcon],svg[icon-park-twotone-hammer-and-anvil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTHammerAndAnvil0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M6 14C6 4 14 4 14 4v20H6zm8-4h28v6H14zM6 30h36s0 8-6 8h-7l2 6H13l2-6H6z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHammerAndAnvil0)"></svg:path>`,
})
export class IconParkTwotoneHammerAndAnvilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
