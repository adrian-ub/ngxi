import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityVideoCameraSolidIcon],svg[clarity-video-camera-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.3 9.35L26 12.9V8a2 2 0 0 0-2-2H6a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h18a2 2 0 0 0 2-2v-4.92l6.3 3.55a1.1 1.1 0 0 0 1.7-.86V10.2a1.1 1.1 0 0 0-1.7-.85" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityVideoCameraSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
