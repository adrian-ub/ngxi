import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFileStaffOneIcon],svg[icon-park-solid-file-staff-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h10"></svg:path><svg:circle cx="34" cy="32" r="4" fill="currentColor"></svg:circle><svg:path d="M42 44a8 8 0 1 0-16 0m4-40v10h10"></svg:path></svg:g>`,
})
export class IconParkSolidFileStaffOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
