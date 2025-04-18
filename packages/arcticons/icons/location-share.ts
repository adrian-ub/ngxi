import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLocationShareIcon],svg[arcticons-location-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c0-9.447 11.326-19.5 11.326-27.674C35.326 9.571 30.256 4.5 24 4.5c-6.255 0-11.326 5.071-11.326 11.326C12.674 24 24 34.052 24 43.5"></svg:path><svg:g fill="none" stroke="currentColor" stroke-miterlimit="10"><svg:circle cx="27.252" cy="11.671" r="1.23"></svg:circle><svg:circle cx="19.834" cy="15.466" r="1.23"></svg:circle><svg:circle cx="27.252" cy="19.262" r="1.23"></svg:circle></svg:g><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="m20.929 14.906l5.229-2.675m-5.229 3.795l5.229 2.676"></svg:path>`,
})
export class ArcticonsLocationShareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
