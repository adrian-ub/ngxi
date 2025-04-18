import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAwfulIcon],svg[arcticons-awful-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.55 25.34c6.48-1.26 13.76-1.96 21.45-1.96s14.97.7 21.45 1.96m-24.368-6.043v-.799"></svg:path><svg:circle cx="13.007" cy="14.881" r="4.626" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13.007" cy="14.881" r="1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.918 19.297v-.799"></svg:path><svg:circle cx="34.993" cy="14.881" r="4.626" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.993" cy="14.881" r="1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.344 12.78c-1.066-1.96-3.763-4.58-7.351-5.028S29.967 10.95 24 10.95s-7.405-3.644-10.993-3.197s-6.285 3.067-7.35 5.028"></svg:path>`,
})
export class ArcticonsAwfulIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
