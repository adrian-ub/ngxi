import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLightMemberIcon],svg[icon-park-light-member-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M35.0563 15.0002L18.4627 7.66508C17.5887 7.27875 16.5635 7.56461 16.0156 8.34745L11.3589 15.0002"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M43 15H5C4.44772 15 4 15.4477 4 16V40C4 40.5523 4.44772 41 5 41H43C43.5523 41 44 40.5523 44 40V16C44 15.4477 43.5523 15 43 15Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19 23L24.1026 33L29 23"></svg:path></svg:g>`,
})
export class IconParkLightMemberIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
