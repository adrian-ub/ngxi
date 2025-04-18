import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVideoWallpapersIcon],svg[arcticons-video-wallpapers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.5 5.5h-18a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2m-20 34h-5c-1.1 0-2-.9-2-2v-27c0-1.1.9-2 2-2h5m22 0h6c1.1 0 2 .9 2 2v27c0 1.1-.9 2-2 2h-6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.5 18.03l9 6l-9 5.97V18z"></svg:path>`,
})
export class ArcticonsVideoWallpapersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
