import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsVideoCameraSlash16SolidIcon],svg[heroicons-video-camera-slash-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 10V6.682L6.318 12H3a2 2 0 0 1-2-2m9-4v3.318L4.682 4H8a2 2 0 0 1 2 2m4.537-1.943A.75.75 0 0 1 15 4.75v6.5a.75.75 0 0 1-1.28.53l-2-2a.75.75 0 0 1-.22-.53v-2.5a.75.75 0 0 1 .22-.53l2-2a.75.75 0 0 1 .817-.163M2.78 4.22a.75.75 0 0 0-1.06 1.06l6.5 6.5a.75.75 0 0 0 1.06-1.06z"></svg:path>`,
})
export class HeroiconsVideoCameraSlash16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
