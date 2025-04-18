import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBinaryeyeAltIcon],svg[arcticons-binaryeye-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.71 32.012l.03-16.024m2.014 16.938l.025-17.852m2.016 18.413l.025-18.974m4.055 19.689l.025-20.403m2.016 19.891l.025-19.38m4.055 17.955l.025-16.53m-18.396 13.58l.042-10.63m24.442 10.63l.041-10.63m-2.077 11.951l.033-13.272"></svg:path><svg:circle cx="24" cy="24" r="15.761" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsBinaryeyeAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
