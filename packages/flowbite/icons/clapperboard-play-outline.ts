import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteClapperboardPlayOutlineIcon],svg[flowbite-clapperboard-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m0 0l-4 4m5 0H4m1 0l4-4m1 4l4-4m-4 7v6l4-3z"></svg:path>`,
})
export class FlowbiteClapperboardPlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
