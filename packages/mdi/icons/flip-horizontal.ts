import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlipHorizontalIcon],svg[mdi-flip-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21h2v-2h-2m4-10h2V7h-2M3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2m16-2v2h2c0-1.1-.9-2-2-2m-8 20h2V1h-2m8 16h2v-2h-2M15 5h2V3h-2m4 10h2v-2h-2m0 10c1.1 0 2-.9 2-2h-2Z"></svg:path>`,
})
export class MdiFlipHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
