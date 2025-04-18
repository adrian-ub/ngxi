import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSchoolBell01Icon],svg[hugeicons-school-bell-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 7a8.045 8.045 0 0 0-7.458-5C6.101 2 2.5 5.582 2.5 10s3.6 8 8.042 8c1.678 0 3.235-.51 4.524-1.385"></svg:path><svg:path d="M21.5 13c0 5.1-4.393 8.595-10 8.967c-.456.03-.683.045-.842-.103S10.5 21.477 10.5 21v-3"></svg:path><svg:circle cx="19" cy="12.5" r="2.5"></svg:circle><svg:circle cx="10.5" cy="10" r="2"></svg:circle></svg:g>`,
})
export class HugeiconsSchoolBell01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
