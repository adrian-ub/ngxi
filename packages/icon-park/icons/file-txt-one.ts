import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFileTxtOneIcon],svg[icon-park-file-txt-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M10 38V44H38V38"></svg:path><svg:path stroke-linejoin="round" d="M38 20V14L30 4H10V20"></svg:path><svg:path stroke-linejoin="round" d="M28 4V14H38"></svg:path><svg:path d="M16 12H20"></svg:path><svg:rect width="40" height="18" x="4" y="20" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linejoin="round" d="M21 25L27 33"></svg:path><svg:path stroke-linejoin="round" d="M27 25L21 33"></svg:path><svg:path stroke-linejoin="round" d="M13 25V33"></svg:path><svg:path stroke-linejoin="round" d="M10 25H13H16"></svg:path><svg:path stroke-linejoin="round" d="M35 25V33"></svg:path><svg:path stroke-linejoin="round" d="M32 25H35H38"></svg:path></svg:g>`,
})
export class IconParkFileTxtOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
