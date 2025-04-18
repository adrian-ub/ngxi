import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShuffleIcon],svg[mdi-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.83 13.41l-1.41 1.41l3.13 3.13L14.5 20H20v-5.5l-2.04 2.04zM14.5 4l2.04 2.04L4 18.59L5.41 20L17.96 7.46L20 9.5V4m-9.41 5.17L5.41 4L4 5.41l5.17 5.17z"></svg:path>`,
})
export class MdiShuffleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
