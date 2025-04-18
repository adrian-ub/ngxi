import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsElla2Icon],svg[arcticons-ella-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.286 20.12v9.04m-4.508-6.309v3.579m9.215-7.675v11.771m4.508-10.406v9.04m4.507-6.309v3.579m5.026-13.905c8.37 6.251-2.412 30.318-11.025 30.088S5.5 33.943 5.5 25.502s24-20.098 33.534-12.977"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.377 5.577C17.221 3.127 4.704 24.934 10.381 31.416s23.247 11.361 29.744 5.972S38.944 8.367 27.377 5.577"></svg:path>`,
})
export class ArcticonsElla2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
