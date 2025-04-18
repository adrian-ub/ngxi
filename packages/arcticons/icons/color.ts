import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsColorIcon],svg[arcticons-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 8.896c-9.448 7.539-7.734 22.976 0 27.744c7.734-4.768 9.448-20.205 0-27.744"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.44 35.359c6.031-3.032 10.885-11.038 8.529-18.998h0c-8.44.544-14.312 8.233-14.825 15.098"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.56 35.359C12.53 32.327 7.676 24.32 10.032 16.36c8.44.544 14.312 8.233 14.825 15.098m1.03 6.482c5 2.58 13.418.92 16.613-5.463c-3.22-2.594-7.36-3.05-10.953-2.132"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.113 37.94c-5 2.58-13.418.92-16.613-5.463c3.22-2.594 7.36-3.05 10.953-2.132"></svg:path>`,
})
export class ArcticonsColorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
