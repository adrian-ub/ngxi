import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSchoolIcon],svg[tabler-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 9L12 5L2 9l10 4zv6"></svg:path><svg:path d="M6 10.6V16a6 3 0 0 0 12 0v-5.4"></svg:path></svg:g>`,
})
export class TablerSchoolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
