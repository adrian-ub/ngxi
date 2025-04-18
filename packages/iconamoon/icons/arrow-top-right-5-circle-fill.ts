import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight5CircleFillIcon],svg[iconamoon-arrow-top-right-5-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m12 3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h1.586l-2.293 2.293a1 1 0 1 0 1.414 1.414L13 12.414V14a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowTopRight5CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
