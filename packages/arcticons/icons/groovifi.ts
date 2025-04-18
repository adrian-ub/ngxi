import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGroovifiIcon],svg[arcticons-groovifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.835 29.164c0 3.172-2.577 5.743-5.758 5.744h-.001c-3.18 0-5.76-2.571-5.76-5.743v-.001c0-3.172 2.58-5.743 5.76-5.743h0c3.181 0 5.759 2.572 5.759 5.743m8.616 0c0 7.918-6.436 14.336-14.375 14.336S8.7 37.082 8.7 29.164h0c.001-7.917 6.437-14.334 14.375-14.334M37.45 29.164h-8.544V4.5c5.177 1.065 11.643 6.73 10.184 16.833m-10.255 7.831c0 3.172-2.577 5.743-5.758 5.744h-.001c-3.18 0-5.76-2.571-5.76-5.743v-.001c0-3.172 2.58-5.743 5.76-5.743h0c3.181 0 5.759 2.572 5.759 5.743"></svg:path>`,
})
export class ArcticonsGroovifiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
