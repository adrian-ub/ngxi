import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMedicationTimeIcon],svg[icon-park-medication-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="24" height="10" x="9" y="5" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" rx="4"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M21 5V13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M15 5V13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M27 5V13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M27 40H8C6.89543 40 6 39.1046 6 38V17C6 15.8954 6.89543 15 8 15H34C35.1046 15 36 15.8954 36 17V26"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M34 32V36H38"></svg:path><svg:circle cx="35" cy="35" r="9" stroke="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M13 5L29 5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M13 15L29 15"></svg:path></svg:g>`,
})
export class IconParkMedicationTimeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
