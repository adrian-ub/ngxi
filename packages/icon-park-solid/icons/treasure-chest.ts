import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTreasureChestIcon],svg[icon-park-solid-treasure-chest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 4H6a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></svg:path><svg:path stroke-linecap="round" d="M4 24h13m14 0h13"></svg:path><svg:path fill="currentColor" d="M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"></svg:path></svg:g>`,
})
export class IconParkSolidTreasureChestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
