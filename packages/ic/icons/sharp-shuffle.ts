import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpShuffleIcon],svg[ic-sharp-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.59 9.17L5.41 4L4 5.41l5.17 5.17zM14.5 4l2.04 2.04L4 18.59L5.41 20L17.96 7.46L20 9.5V4zm.33 9.41l-1.41 1.41l3.13 3.13L14.5 20H20v-5.5l-2.04 2.04z"></svg:path>`,
})
export class IcSharpShuffleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
