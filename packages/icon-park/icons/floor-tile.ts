import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFloorTileIcon],svg[icon-park-floor-tile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M28 6L6 28"></svg:path><svg:path stroke-linecap="round" d="M42 20L20 42"></svg:path><svg:path stroke-linecap="round" d="M40 8L8 40"></svg:path><svg:path stroke-linecap="round" d="M12 22L19 29"></svg:path><svg:path stroke-linecap="round" d="M29 19L36 26"></svg:path></svg:g>`,
})
export class IconParkFloorTileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
