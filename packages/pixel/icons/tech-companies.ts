import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelTechCompaniesIcon],svg[pixel-tech-companies-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.502 1.5v22.005h1v-5.001h3.001v5.001h6.002V1.5zm6.002 1v2h-2v-2zm0 5.001h-2v-2h2zm0 3.001h-2v-2h2zm0 3h-2v-2h2zm0 3.001h-2v-2h2zM12.502 2.5h2v2h-2zm0 3h2v2.001h-2zm0 3.002h2v2h-2zm0 3h2v2h-2zm0 3.001h2v2h-2zm8.002 7.002h-4v-3.001h4zm0-5.002h-2v-2h2zm0-3h-2v-2h2zm0-3.001h-2v-2h2zm0-3h-2V5.5h2zm0-3.001h-2v-2h2zm-19.004 4v15.004h3v-4.001h3.001v4h3.001V8.502zm1 1h3v2.001h-3zm0 3.001h3v2h-3zm0 5.001v-2h3v2zm7.002 0h-3v-2h3zm0-3h-3v-2h3zm0-3h-3V9.501h3z"></svg:path>`,
})
export class PixelTechCompaniesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
