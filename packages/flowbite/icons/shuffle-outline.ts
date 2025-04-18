import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteShuffleOutlineIcon],svg[flowbite-shuffle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.484 9.166L15 7h5m0 0l-3-3m3 3l-3 3M4 17h4l1.577-2.253M4 7h4l7 10h5m0 0l-3 3m3-3l-3-3"></svg:path>`,
})
export class FlowbiteShuffleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
