import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandTumblrFilledIcon],svg[tabler-brand-tumblr-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2a1 1 0 0 1 1 1v3h3a1 1 0 0 1 .993.883L19 7v4a1 1 0 0 1-1 1h-3v4h3a1 1 0 0 1 .993.883L19 17v4a1 1 0 0 1-1 1h-4a5 5 0 0 1-5-5v-5H6a1 1 0 0 1-.993-.883L5 11V7a1 1 0 0 1 1-1h1a2 2 0 0 0 2-2V3a1 1 0 0 1 1-1z"></svg:path>`,
})
export class TablerBrandTumblrFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
