import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTreasureChestIcon],svg[icon-park-treasure-chest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 4H6C4.89543 4 4 4.89543 4 6V42C4 43.1046 4.89543 44 6 44H42C43.1046 44 44 43.1046 44 42V6C44 4.89543 43.1046 4 42 4Z"></svg:path><svg:path stroke-linecap="round" d="M4 24H17"></svg:path><svg:path stroke-linecap="round" d="M31 24H44"></svg:path><svg:path fill="#2F88FF" d="M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z"></svg:path></svg:g>`,
})
export class IconParkTreasureChestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
