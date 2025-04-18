import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPhoneRingIcon],svg[majesticons-phone-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M23 17.5L20.5 20l-3-2v-4.158C15.976 13.337 14.146 13 12 13s-3.976.337-5.5.842V18l-3 2L1 17.5c.665-.997 2.479-2.657 5.5-3.658C8.024 13.337 9.855 13 12 13s3.976.337 5.5.842c3.021 1 4.835 2.66 5.5 3.658"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 13.842C15.976 13.337 14.146 13 12 13s-3.976.337-5.5.842m11 0c3.021 1 4.835 2.66 5.5 3.658L20.5 20l-3-2zm-11 0c-3.021 1-4.835 2.66-5.5 3.658L3.5 20l3-2zM12 4v4M4.636 6.636l2.828 2.828m11.9-2.828l-2.828 2.828"></svg:path></svg:g>`,
})
export class MajesticonsPhoneRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
