import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkContrastViewCircleIcon],svg[icon-park-contrast-view-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44V4Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44V4Z"></svg:path><svg:path stroke-linecap="round" d="M24 36H9"></svg:path><svg:path stroke-linecap="round" d="M24 28H5"></svg:path><svg:path stroke-linecap="round" d="M24 20H5"></svg:path><svg:path stroke-linecap="round" d="M24 12H9"></svg:path></svg:g>`,
})
export class IconParkContrastViewCircleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
