import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVideoSwapCameraIcon],svg[streamline-video-swap-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.15 8.063l-.841.636l-.636-.841"></svg:path><svg:path d="M9.262 8.636a2.58 2.58 0 0 0-3.25-3.585M3.795 6.865l.84-.635l.636.84"></svg:path><svg:path d="M4.682 6.293a2.58 2.58 0 0 0 3.25 3.585"></svg:path><svg:path d="M13.5 4.5a1 1 0 0 0-1-1h-2L9 1.5H5l-1.5 2h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1z"></svg:path></svg:g>`,
})
export class StreamlineVideoSwapCameraIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
