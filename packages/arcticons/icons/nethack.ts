import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNethackIcon],svg[arcticons-nethack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.587 14.55a12.35 12.35 0 0 0 5.913-.885L39.41 8.36l-1.823 1.05m-2.021 21.26a13.6 13.6 0 0 0 5.502 5.101l-3.095 1.659s.443 2.708 1.603 3.648c-3.537.607-7.375-.757-8.44-4.8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.495 32.167s1.765 1.283.66 2.223a1.886 1.886 0 0 1-2.34-.06"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 42.072c-7.342-3.703-13.587-14.535-13.587-14.535V5.928l3.703 3.703l3.675-3.675H30.21l3.675 3.675l3.703-3.703v21.609S31.342 38.369 24 42.072"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.413 14.55a12.35 12.35 0 0 1-5.913-.885L8.59 8.36l1.824 1.05m2.02 21.26a13.6 13.6 0 0 1-5.502 5.101l3.095 1.659s-.443 2.708-1.603 3.648c3.537.607 7.375-.757 8.44-4.8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.505 32.167s-1.765 1.283-.66 2.223a1.886 1.886 0 0 0 2.34-.06M24 5.956v36.116"></svg:path>`,
})
export class ArcticonsNethackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
