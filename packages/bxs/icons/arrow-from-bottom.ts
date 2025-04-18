import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsArrowFromBottomIcon],svg[bxs-arrow-from-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18h12v2H6zm6-14l-6 6h5v6h2v-6h5z"></svg:path>`,
})
export class BxsArrowFromBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
