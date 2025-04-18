import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandAdobeXdIcon],svg[tabler-brand-adobe-xd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12c0-4.243 0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318S3 16.242 3 12m3.316-3.79L12 15.79m-5.684 0L12 8.21"></svg:path><svg:path d="M17.684 11.053v3.79c0 1.044-.49.946-1.42.946a2.368 2.368 0 0 1 0-4.736zm0 0V8.21"></svg:path></svg:g>`,
})
export class TablerBrandAdobeXdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
