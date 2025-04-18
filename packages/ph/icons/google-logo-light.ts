import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGoogleLogoLightIcon],svg[ph-google-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a94 94 0 1 1-21.49-59.82a6 6 0 1 1-9.25 7.64A82 82 0 1 0 209.78 134H128a6 6 0 0 1 0-12h88a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhGoogleLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
