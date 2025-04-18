import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOpenDoorIcon],svg[icon-park-open-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M20 4V44L42 38V10L20 4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 10H20V38H6V10Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 22V26"></svg:path></svg:g>`,
})
export class IconParkOpenDoorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
