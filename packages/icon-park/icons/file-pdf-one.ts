import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFilePdfOneIcon],svg[icon-park-file-pdf-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 38V44H38V38"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 20V14L30 4H10V20"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 4V14H38"></svg:path><svg:rect width="40" height="18" x="4" y="20" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M21 25V33"></svg:path><svg:path stroke-linecap="round" d="M10 25V33"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 33V25H37"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 30H37"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 25H13.5C14.8807 25 16 26.1193 16 27.5V27.5C16 28.8807 14.8807 30 13.5 30H10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 25H23C25.2091 25 27 26.7909 27 29V29C27 31.2091 25.2091 33 23 33H21"></svg:path><svg:path stroke-linecap="round" d="M16 12H20"></svg:path></svg:g>`,
})
export class IconParkFilePdfOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
