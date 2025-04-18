import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconLineVuetifyIcon],svg[devicon-line-vuetify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m68.094 10.166l-66.291.002l.431.75l30.672 53.129l2.037 3.545l23.319-40.403zm10.62.002l-.144.25l-13.707 23.746l-24.6 42.625L64 117.922l31.105-53.875l31.092-53.879Zm-75.179 1h62.826l-8.966 15.521l-22.45 38.899l-1.172-2.041Zm75.758 0h45.172L94.238 63.547L64 115.92L41.418 76.79L65.73 34.663z"></svg:path>`,
})
export class DeviconLineVuetifyIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
