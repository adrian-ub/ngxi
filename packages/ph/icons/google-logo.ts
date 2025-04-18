import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGoogleLogoIcon],svg[ph-google-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a96 96 0 1 1-21.95-61.09a8 8 0 1 1-12.33 10.18A80 80 0 1 0 207.6 136H128a8 8 0 0 1 0-16h88a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhGoogleLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
