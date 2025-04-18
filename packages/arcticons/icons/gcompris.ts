import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGcomprisIcon],svg[arcticons-gcompris-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m35.826 27.878l3.63 3.634c-7.12 7.126-18.662 7.126-25.782 0c-7.119-7.126-7.119-18.68 0-25.806l3.63 3.634"></svg:path><svg:path d="M39.662 18.609c0 7.24-5.863 13.109-13.097 13.109h0c-7.233 0-13.096-5.87-13.096-13.11h0c0-7.239 5.863-13.108 13.096-13.108s13.097 5.87 13.097 13.109M16.411 42.5a17.09 17.09 0 0 1 20.309 0m-10.155-3.345v-2.299"></svg:path><svg:path d="M31.197 14.439a5.553 5.553 0 0 0-6.801-3.927h0a5.553 5.553 0 0 0-3.927 6.802l1.464 5.465a5.553 5.553 0 0 0 6.802 3.927h0a5.553 5.553 0 0 0 3.927-6.802l-5.364 1.438"></svg:path></svg:g>`,
})
export class ArcticonsGcomprisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
