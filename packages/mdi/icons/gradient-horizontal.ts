import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGradientHorizontalIcon],svg[mdi-gradient-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13v-2h2v2m0 2v-2h2v2m-2-4V9h2v2M9 9V7h2v2m-2 8v-2h2v2M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m15 10v2h-2v-2m2-4v2h-2v-2m2-4v2h-2V7m-5-2v2h2V5h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2v-2h-2v2H5V5Z"></svg:path>`,
})
export class MdiGradientHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
