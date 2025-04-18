import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidGuideBoardIcon],svg[icon-park-solid-guide-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 4v37"></svg:path><svg:path fill="currentColor" d="M24 8h15.545L42 12l-2.455 4H24zm0 14H8.455L6 26l2.455 4H24z"></svg:path><svg:path stroke-linecap="round" d="M16 42h16"></svg:path></svg:g>`,
})
export class IconParkSolidGuideBoardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
