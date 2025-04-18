import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVideoCameraDollarFilledIcon],svg[tdesign-video-camera-dollar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H0v16h17v-4.277l7 4V4.233l-7 4.2zM9.5 8h2v2h-4v1h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2v1h-2v-1h-2v-2h4v-1h-2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2V7h2z"></svg:path>`,
})
export class TdesignVideoCameraDollarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
