import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVideoCameraDollarIcon],svg[tdesign-video-camera-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3.998h17v4.434l7-4.2v15.49l-7-4v4.276H0zm17 9.42l5 2.857v-8.51l-5 3zM2 5.998v12h13v-12zM9.5 7v1h2v2h-4v1h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2v1h-2v-1h-2v-2h4v-1h-2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2V7z"></svg:path>`,
})
export class TdesignVideoCameraDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
