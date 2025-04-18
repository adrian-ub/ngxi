import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSchoolOffIcon],svg[tabler-school-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 9L12 5l-2.136.854M7 7L2 9l10 4l.697-.279m2.878-1.151L22 9v6"></svg:path><svg:path d="M6 10.6V16c0 1.657 2.686 3 6 3c2.334 0 4.357-.666 5.35-1.64M18 14v-3.4M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerSchoolOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
