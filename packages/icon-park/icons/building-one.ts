import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBuildingOneIcon],svg[icon-park-building-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M11 14L25 4V44H11V14Z" clip-rule="evenodd"></svg:path><svg:path d="M25 13L39 23V44"></svg:path><svg:path d="M4 44H44"></svg:path></svg:g>`,
})
export class IconParkBuildingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
