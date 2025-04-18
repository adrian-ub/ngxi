import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSpeaker3LineIcon],svg[ri-speaker-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m10 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2M7 18a1 1 0 1 1 0-2a1 1 0 0 1 0 2m5-3a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 2a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0-4a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class RiSpeaker3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
