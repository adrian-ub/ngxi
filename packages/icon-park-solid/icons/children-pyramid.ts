import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidChildrenPyramidIcon],svg[icon-park-solid-children-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M15 17h18v8H15zm-5 8h28v8H10zm-5 8h38v8H5z"></svg:path><svg:path d="M24 17V7m5 0H19"></svg:path></svg:g>`,
})
export class IconParkSolidChildrenPyramidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
