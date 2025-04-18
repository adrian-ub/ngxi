import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTriangleFlagTwoStripesIcon],svg[iconoir-triangle-flag-two-stripes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 21v-5m0 0l9.723-6.482a.6.6 0 0 0-.017-1.01l-8.79-5.441a.6.6 0 0 0-.916.51zm0-5l6.5-4.476"></svg:path>`,
})
export class IconoirTriangleFlagTwoStripesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
