import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUpLightIcon],svg[lets-icons-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 4l.354-.354L10 3.293l-.354.353zm8 16.5a.5.5 0 0 0 0-1zM15.354 8.646l-5-5l-.708.708l5 5zm-5.708-5l-5 5l.708.708l5-5zM9.5 4v10h1V4zM16 20.5h2v-1h-2zM9.5 14a6.5 6.5 0 0 0 6.5 6.5v-1a5.5 5.5 0 0 1-5.5-5.5z"></svg:path>`,
})
export class LetsIconsUpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
