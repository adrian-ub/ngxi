import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFileZipIcon],svg[icon-park-file-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 38V44H38V38"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 20V14L30 4H10V20"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 4V14H38"></svg:path><svg:path stroke-linecap="round" d="M16 12H20"></svg:path><svg:rect width="40" height="18" x="4" y="20" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 25H17L11 33H17"></svg:path><svg:path stroke-linecap="round" d="M24 25V33"></svg:path><svg:path stroke-linecap="round" d="M31 25V33"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 25H34.5C35.8807 25 37 26.1193 37 27.5V27.5C37 28.8807 35.8807 30 34.5 30H31"></svg:path></svg:g>`,
})
export class IconParkFileZipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
