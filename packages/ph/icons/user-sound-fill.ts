import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUserSoundFillIcon],svg[ph-user-sound-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.13 202.85A8 8 0 0 1 192 216H24a8 8 0 0 1-6.12-13.15c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17m-1.27-141.46a8 8 0 0 0-4.22 10.5a92.26 92.26 0 0 1 0 72.22a8 8 0 1 0 14.72 6.29a108.36 108.36 0 0 0 0-84.8a8 8 0 0 0-10.5-4.21m39.85-8.54a8 8 0 1 0-14.7 6.3a124.43 124.43 0 0 1 0 97.7a8 8 0 1 0 14.7 6.3a140.34 140.34 0 0 0 0-110.3"></svg:path>`,
})
export class PhUserSoundFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
