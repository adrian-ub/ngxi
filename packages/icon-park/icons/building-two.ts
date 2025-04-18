import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBuildingTwoIcon],svg[icon-park-building-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21 13L11 20L11 44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M21 4L31 11V24L38 29V44H21V4Z" clip-rule="evenodd"></svg:path><svg:path d="M4 44H44"></svg:path></svg:g>`,
})
export class IconParkBuildingTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
