import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsInpatient24pxIcon],svg[healthicons-inpatient-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.62 5.175a2.5 2.5 0 1 0-4.24 2.65l.62.992V16H3v2h1.268a2 2 0 1 0 3.465 0h8.534a2 2 0 1 0 3.465 0H21v-2h-1v-3.5A2.5 2.5 0 0 0 18.5 8H9.386zM18 13H6.614L6 12.017V16h12z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsInpatient24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
