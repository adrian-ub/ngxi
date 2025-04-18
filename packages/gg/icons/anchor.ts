import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggAnchorIcon],svg[gg-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 6a3 3 0 0 1-2 2.83v8.044c1.725-.444 3-2.01 3-3.874h2a6 6 0 0 1-5 5.917V20a1 1 0 1 1-2 0v-1.083A6 6 0 0 1 6 13h2a4 4 0 0 0 3 3.874V8.829A3.001 3.001 0 1 1 15 6m-3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class GgAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
