import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneAssemblyLineIcon],svg[icon-park-twotone-assembly-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTAssemblyLine0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="16" cy="10" r="4" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 38H13c-4 0-7-2.917-7-7s3-7 7-7h7m0 0h15c4 0 7-2.917 7-7s-3-7-7-7H20M6 10h6m24 28h6"></svg:path><svg:circle cx="32" cy="38" r="4" fill="#555"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAssemblyLine0)"></svg:path>`,
})
export class IconParkTwotoneAssemblyLineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
