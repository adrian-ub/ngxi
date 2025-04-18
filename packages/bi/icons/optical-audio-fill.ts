import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biOpticalAudioFillIcon],svg[bi-optical-audio-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 6a3 3 0 1 1 0 6a3 3 0 0 1 0-6m1 3a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path><svg:path d="M2.5 15a.5.5 0 0 1-.5-.5v-3.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 1 .146-.354l2-2A.5.5 0 0 1 4.5 2h7a.5.5 0 0 1 .354.146l2 2A.5.5 0 0 1 14 4.5v2.05a2.5 2.5 0 0 1 0 4.9v3.05a.5.5 0 0 1-.5.5zM8 5a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path></svg:g>`,
})
export class BiOpticalAudioFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
