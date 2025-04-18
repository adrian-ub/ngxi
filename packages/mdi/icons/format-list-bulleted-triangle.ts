import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatListBulletedTriangleIcon],svg[mdi-format-list-bulleted-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15.5L7.5 20h-5zM9 19h12v-2H9zM5 9.5L7.5 14h-5zM9 13h12v-2H9zM5 3.5L7.5 8h-5zM9 7h12V5H9z"></svg:path>`,
})
export class MdiFormatListBulletedTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
