import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationSocialWindowsIcon],svg[foundation-social-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85.905 47.797V13l-39.97 5.83v28.967zM43.121 19.241l-29.026 4.234v24.322h29.026zM14.095 51.774v24.632l29.026 4.283V51.774zm31.84 29.331L85.905 87V51.774h-39.97z"></svg:path>`,
})
export class FoundationSocialWindowsIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
