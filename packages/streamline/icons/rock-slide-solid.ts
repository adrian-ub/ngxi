import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRockSlideSolidIcon],svg[streamline-rock-slide-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.854.146A.5.5 0 0 0 0 .5v13a.5.5 0 0 0 .5.5H9a.5.5 0 0 0 .49-.598l-.5-2.5a.5.5 0 0 0-.154-.272L3.47 5.751L2.995 2.43a.5.5 0 0 0-.141-.283l-2-2ZM8 5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m4 6a1 1 0 1 1 2 0a1 1 0 0 1-2 0M5 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRockSlideSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
