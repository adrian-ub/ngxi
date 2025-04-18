import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBuildingThreeIcon],svg[icon-park-building-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 8L44 21V44H4L4 21L24 8Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M20 44V23L12 28L12 44"></svg:path><svg:path stroke="#fff" d="M28 44V23L36 28L36 44"></svg:path><svg:path stroke="#000" d="M41 44H8"></svg:path></svg:g>`,
})
export class IconParkBuildingThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
