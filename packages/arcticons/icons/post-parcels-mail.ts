import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPostParcelsMailIcon],svg[arcticons-post-parcels-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.615 29.172v5.516L25.673 42.5l12.534-7.91V23.395L25.51 31.22l-12.778-7.95l-5.604-9.785L20.678 5.5l4.674 9.76l6.641 4.167"></svg:path><svg:path d="m25.51 31.221l2.668-8.948l12.694-8.88l-2.684 10.018m-25.39-.171l12.555-7.97"></svg:path></svg:g>`,
})
export class ArcticonsPostParcelsMailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
