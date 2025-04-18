import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOctotcIcon],svg[arcticons-octotc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.572 34.879c-18.623-2.932-9.416-19.66-3.509-10.408c-3.639-2.812-5.415 6.642 4.377 4.054m16.524 6.354c17.426-1.2 9.156-20.507 3.947-10.72c4.734-1.57 2.342 7.788-5.236 4.79"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.68 34.744c10.743 9.862 20.66 8.701 18.857.953c-6.551 6.64-15.016-2.178-8.751-12.606C48.596.694-1.263.433 13.677 22.935c9.426 12.946-5.806 19.302-8.074 12.71c-.87 9.48 11.359 7.076 18.076-.901"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:ellipse cx="18.437" cy="17.415" rx="3.55" ry="4.79"></svg:ellipse><svg:ellipse cx="29.832" cy="17.442" rx="3.55" ry="4.79"></svg:ellipse><svg:path d="M27.862 21.427c.314-6.767 5.206-2.722 2.93.628m-10.263-.77c.228-4.15-4.923-4.515-3.184.688"></svg:path></svg:g>`,
})
export class ArcticonsOctotcIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
