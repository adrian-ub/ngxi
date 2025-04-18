import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatListBulletedSquareIcon],svg[mdi-format-list-bulleted-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h4v4H3zm6 1v2h12V5zm-6 5h4v4H3zm6 1v2h12v-2zm-6 5h4v4H3zm6 1v2h12v-2z"></svg:path>`,
})
export class MdiFormatListBulletedSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
