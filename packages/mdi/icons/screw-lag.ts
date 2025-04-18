import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiScrewLagIcon],svg[mdi-screw-lag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 19.3l4-2.7V20l-2 2l-2-2zm4-6.6l-4 2.7v2L9 18v1l6-3.9V14l-1 .7zM7 2v3h10V2zm2 4v3l1 .7v3.7L9 14v1l6-3.9V10l-1 .7v-1l1-.7V6z"></svg:path>`,
})
export class MdiScrewLagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
