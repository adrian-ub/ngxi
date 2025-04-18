import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHomeHeartFillIcon],svg[ri-home-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3zm-8-3l3.359-3.359a2.25 2.25 0 0 0-3.182-3.182l-.177.177l-.177-.177a2.25 2.25 0 0 0-3.182 3.182z"></svg:path>`,
})
export class RiHomeHeartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
