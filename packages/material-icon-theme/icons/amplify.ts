import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAmplifyIcon],svg[material-icon-theme-amplify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff9800" d="M14 10L5 28h12l-2-4h-4l3-6l5 10h4zm1-2l2-4l12 24h-4l-8-16z"></svg:path>`,
})
export class MaterialIconThemeAmplifyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
