import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneShuffleIcon],svg[ic-twotone-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4h-5.5l2.04 2.04L4 18.59L5.41 20L17.96 7.46L20 9.5zM5.41 4L4 5.41l5.17 5.17l1.42-1.41zM20 20v-5.5l-2.04 2.04l-3.13-3.13l-1.41 1.41l3.13 3.13L14.5 20z"></svg:path>`,
})
export class IcTwotoneShuffleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
