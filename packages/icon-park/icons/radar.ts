import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRadarIcon],svg[icon-park-radar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path stroke-linejoin="round" d="M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z" clip-rule="evenodd"></svg:path><svg:path stroke-linejoin="round" d="M24 4V44"></svg:path><svg:path d="M4 24.0002L18 24.0086"></svg:path><svg:path stroke-linejoin="round" d="M4 24.0083L44 24.0083"></svg:path></svg:g>`,
})
export class IconParkRadarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
