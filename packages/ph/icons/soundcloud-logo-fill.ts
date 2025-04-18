import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSoundcloudLogoFillIcon],svg[ph-soundcloud-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 120v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0m24-32a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8m32-8a8 8 0 0 0-8 8v104a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m32-32a8 8 0 0 0-8 8v136a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8m110.84 58.34A80 80 0 0 0 144 40h-4a4 4 0 0 0-4 4v152a4 4 0 0 0 4 4h67.21c25.58 0 47.27-19.72 48.71-45.26a48.06 48.06 0 0 0-33.08-48.4"></svg:path>`,
})
export class PhSoundcloudLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
