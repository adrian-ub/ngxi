import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRakutenBeautyIcon],svg[arcticons-rakuten-beauty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M20.172 35.215a4.273 4.273 0 1 1 4.273 4.272c-2.36 0-4.057-1.922-4.273-4.272L17.42 5.5l-2.752 29.715c-.217 2.35-1.914 4.272-4.274 4.272a4.273 4.273 0 1 1 4.274-4.272"></svg:path><svg:path d="M6.595 42.5c1.045-.464 2.176-1.936 2.327-3.276"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.922 5.524h8.256c2.05 0 3.701 1.65 3.701 3.7v29.248M29.922 24.694h11.957m-11.957-12.78h11.957m-11.957 6.39h11.957"></svg:path>`,
})
export class ArcticonsRakutenBeautyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
