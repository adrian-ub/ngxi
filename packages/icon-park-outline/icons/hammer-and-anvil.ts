import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHammerAndAnvilIcon],svg[icon-park-outline-hammer-and-anvil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M6 14C6 4 14 4 14 4v20H6zm8-4h28v6H14zM6 30h36s0 8-6 8h-7l2 6H13l2-6H6z"></svg:path>`,
})
export class IconParkOutlineHammerAndAnvilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
