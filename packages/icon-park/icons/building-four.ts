import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBuildingFourIcon],svg[icon-park-building-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M17 14L44 24V44H17L17 14Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" d="M17 14L4 24L4 44H17"></svg:path><svg:path stroke="#fff" d="M35 44V32L26 29L26 44"></svg:path><svg:path stroke="#000" d="M44 44H17"></svg:path></svg:g>`,
})
export class IconParkBuildingFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
