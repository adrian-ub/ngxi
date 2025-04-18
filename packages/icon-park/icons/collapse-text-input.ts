import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCollapseTextInputIcon],svg[icon-park-collapse-text-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 20H28V4"></svg:path><svg:path d="M4 28H20V44"></svg:path></svg:g>`,
})
export class IconParkCollapseTextInputIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
