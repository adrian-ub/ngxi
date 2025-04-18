import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psMaximumTemp110230Icon],svg[ps-maximum-temp-110-230-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 195q0-22-22-22H235q-97 0-166 68.5T0 408q0 21 21 21h470q10 0 17-8q4-4 4-19L427 94q-11-40-45.5-65.5T305 3H192q-21 0-21 21t21 21h113q28 0 50.5 17.5T386 107l77 280H45q8-72 62.5-121.5T235 216h106q10 0 16-6t6-15m-86 106q0 9-6 15.5t-15 6.5t-15-6.5t-6-15.5q0-8 6-14.5t15-6.5t15 6.5t6 14.5"></svg:path>`,
})
export class PsMaximumTemp110230Icon {
  readonly viewBox = input("0 0 512 472")
  readonly width = input("1.09em")
  readonly height = input("1em")
}
