import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEdtUnivIcon],svg[arcticons-edt-univ-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.66 8.74h12.68m4.72 0h4.44a1.88 1.88 0 0 1 1.88 1.88v31a1.88 1.88 0 0 1-1.88 1.88h-31a1.88 1.88 0 0 1-1.88-1.88v-31A1.88 1.88 0 0 1 8.5 8.74h4.44m-6.32 8.95h34.76"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.34 10.62a2.36 2.36 0 0 0 2.36 2.36h0a2.36 2.36 0 0 0 2.36-2.36h0V6.86h0A2.36 2.36 0 0 0 32.7 4.5h0a2.36 2.36 0 0 0-2.36 2.36Zm-17.4 0a2.36 2.36 0 0 0 2.36 2.36h0a2.36 2.36 0 0 0 2.36-2.36V6.86A2.36 2.36 0 0 0 15.3 4.5h0a2.36 2.36 0 0 0-2.36 2.36h0Zm-.44 22.843h23m-23 5.746h23m-23-11.493h23m-23-5.746h23m0 17.239V21.97m-5.737 17.239V21.97m-5.736 17.239V21.97m-5.79 17.25V21.981M12.5 39.209V21.97"></svg:path>`,
})
export class ArcticonsEdtUnivIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
