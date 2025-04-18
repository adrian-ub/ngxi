import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirVideoCameraIcon],svg[iconoir-video-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12v4.4a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 0 1 .6.6zm0 0l5.016-4.18a.6.6 0 0 1 .984.461v7.438a.6.6 0 0 1-.984.46z"></svg:path>`,
})
export class IconoirVideoCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
