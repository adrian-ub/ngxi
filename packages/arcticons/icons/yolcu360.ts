import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYolcu360Icon],svg[arcticons-yolcu360-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 34.394c.457.383.951.559 2.06.559h.258c.914 0 1.655-.742 1.655-1.656h0c0-.914-.741-1.655-1.655-1.655"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 28.883c.458-.382.952-.556 2.06-.553l.258.002c.914 0 1.655.74 1.655 1.655h0c0 .914-.741 1.655-1.655 1.655m-1.272 0h1.272"></svg:path><svg:rect width="4.387" height="6.622" x="29.9" y="28.33" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.194" ry="2.194"></svg:rect><svg:circle cx="25.53" cy="32.759" r="2.194" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.53 29.138c-.366-.479-.923-.808-1.846-.808h-.154a2.194 2.194 0 0 0-2.194 2.194v2.235"></svg:path><svg:circle cx="37.186" cy="28.018" r="1.314" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.36 16.328v4.01a2.43 2.43 0 0 1-2.43 2.43h0a2.43 2.43 0 0 1-2.43-2.43v-4.01"></svg:path><svg:rect width="4.86" height="6.439" x="16.785" y="16.328" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.43" ry="2.43"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.64 16.328v4.01a2.43 2.43 0 0 0 2.43 2.43h0a2.43 2.43 0 0 0 2.43-2.43v-4.01m-14.316-3.281v9.72m7.08-1.224a2.43 2.43 0 0 1-2.11 1.224h0a2.43 2.43 0 0 1-2.43-2.43v-1.58a2.43 2.43 0 0 1 2.43-2.429h0c.9 0 1.688.49 2.107 1.22M14.36 20.337v5.71"></svg:path>`,
})
export class ArcticonsYolcu360Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
