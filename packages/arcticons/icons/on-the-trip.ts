import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOnTheTripIcon],svg[arcticons-on-the-trip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.264 31.754v7.158m2.554 0v-7.158h2.342c1.324 0 2.397 1.076 2.397 2.404s-1.073 2.404-2.397 2.404h-2.342m-9.847 2.35v-7.158h2.342c1.324 0 2.397 1.076 2.397 2.404s-1.073 2.404-2.397 2.404H15.97m2.344 0l2.342 2.349M9 31.754h4.739m-2.369 7.158v-7.158M9 22.127h4.739m-2.369 7.158v-7.158m4.601 0v7.158m4.739-7.158v7.158m-4.739-3.592h4.739m2.554.013h2.334m1.243 3.579h-3.577v-7.158h3.577m-10.87-2.468v-7.158l4.739 7.158v-7.158m-9.34-.001a2.37 2.37 0 0 1 2.369 2.371v2.416a2.37 2.37 0 0 1-2.37 2.371h0A2.37 2.37 0 0 1 9 17.289V14.87a2.37 2.37 0 0 1 2.37-2.371"></svg:path>`,
})
export class ArcticonsOnTheTripIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
