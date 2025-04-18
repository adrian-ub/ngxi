import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMysielteidIcon],svg[arcticons-mysielteid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.208 11.785a19.009 19.009 0 0 1 33.292 8.93m-4.16 15.5a19.009 19.009 0 0 1-33.292-8.93"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.21 11.784s9.226-.088 13.206 1.36s6.558 5.579 10.05 6.798s10.034.773 10.034.773M7.05 27.284s7.94-.363 11.933 1.088s6.572 5.582 10.05 6.798s11.307 1.045 11.307 1.045M8.383 17.124s.367-.239 2.826-.174s8.088-.032 11.849 1.36s6.339 5.522 10.05 6.798s11.392.774 11.392.774m-41-3.222a76 76 0 0 1 7.71-.271c3.022.134 6.95.02 10.49 1.36s6.12 5.462 10.05 6.798s5.157.778 12.75.773"></svg:path>`,
})
export class ArcticonsMysielteidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
