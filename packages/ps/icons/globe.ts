import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psGlobeIcon],svg[ps-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237 347q71 0 121-50.5T408 176T358 55.5T237 5q-70 0-120 50T67 176t50 121t120 50m0-299q53 0 90.5 37.5T365 176t-37.5 90.5T237 304t-90.5-38t-37.5-90t37.5-90T237 48m-21 361v23q0 9-5 14.5t-11 5.5l-5 1q-18 0-30.5 13T152 496h171q0-17-13-30t-30-13q-2 0-5.5-.5t-9.5-6t-6-14.5v-23q105-11 166-92q5-7 3.5-16t-7.5-14q-7-5-16.5-3.5T391 291q-57 77-154 77q-80 0-136-56T45 176q0-36 17-77q18-34 41-57q14-16 0-30q-15-15-30 0q-33 33-49 70q-21 42-21 94q0 91 61.5 158T216 409"></svg:path>`,
})
export class PsGlobeIcon {
  readonly viewBox = input("0 0 432 496")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
