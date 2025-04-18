import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTypewiseIcon],svg[arcticons-typewise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.171 13.794L6.768 33.599c-.261 1.396-.087 2.792.524 4.014c2.705 5.584 11.691 3.752 11.604-7.59"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.896 30.022c-.087 1.396 0 3.054.61 4.275c2.705 5.497 11.692 3.665 11.692-7.59"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.198 26.707c-.087 1.396 0 3.228.61 4.45C34.514 36.652 43.5 34.82 43.5 23.565m-31.497-2.268l2.443-.872M4.5 23.828l4.188-1.396m9.51-14.658h23.034v12.564H18.198zm5.235 9.282h12.825"></svg:path><svg:circle cx="22.037" cy="11.054" r=".75" fill="currentColor"></svg:circle><svg:circle cx="25.876" cy="11.054" r=".75" fill="currentColor"></svg:circle><svg:circle cx="29.715" cy="11.054" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.554" cy="11.054" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.393" cy="11.054" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22.037" cy="13.671" r=".75" fill="currentColor"></svg:circle><svg:circle cx="25.876" cy="13.671" r=".75" fill="currentColor"></svg:circle><svg:circle cx="29.715" cy="13.671" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.554" cy="13.671" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.393" cy="13.671" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsTypewiseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
