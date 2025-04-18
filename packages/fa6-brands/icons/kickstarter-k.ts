import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsKickstarterKIcon],svg[fa6-brands-kickstarter-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m356.6 256.2l40.8-40.5c42.2-41.9 42.2-110.3 0-152.1s-111-41.9-153.2 0l-14.9 14.8C209.6 50.3 177.1 32 140.2 32C80.5 32 32 80.2 32 139.5v233C32 431.9 80.5 480 140.2 480c37.1 0 69.3-18.3 89-46.4l14.9 14.7c42.2 41.9 111 41.9 153.2 0s42.2-110.3 0-152.1l-40.8-40z"></svg:path>`,
})
export class Fa6BrandsKickstarterKIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
