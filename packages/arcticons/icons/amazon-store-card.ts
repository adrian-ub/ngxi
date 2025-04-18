import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAmazonStoreCardIcon],svg[arcticons-amazon-store-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.29 32.59l6.3-20.46a3.344 3.344 0 0 1 4.18-2.22l30.18 9.29m-9.463 7.597c1.395-.121 3.809-.109 4.225.901c.45 1.093-1.04 2.704-2.329 3.916"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.462 20.349c1.482 2.161 6.542 6.329 12.715 8.229c5.885 1.81 10.133.784 12.397.056"></svg:path>`,
})
export class ArcticonsAmazonStoreCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
