import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopLeft5CircleFillIcon],svg[iconamoon-arrow-top-left-5-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m13-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-1.586l2.293 2.293a1 1 0 0 0 1.414-1.414L12.414 11H14a1 1 0 0 0 1-1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowTopLeft5CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
