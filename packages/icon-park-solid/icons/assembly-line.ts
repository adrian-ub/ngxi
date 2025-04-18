import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAssemblyLineIcon],svg[icon-park-solid-assembly-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="16" cy="10" r="4" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 38H13c-4 0-7-2.917-7-7s3-7 7-7h7m0 0h15c4 0 7-2.917 7-7s-3-7-7-7H20M6 10h6m24 28h6"></svg:path><svg:circle cx="32" cy="38" r="4" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkSolidAssemblyLineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
