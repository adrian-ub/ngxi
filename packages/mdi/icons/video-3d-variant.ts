import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVideo3dVariantIcon],svg[mdi-video-3d-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10v4a.5.5 0 0 1-.5.5h-1v-5h1a.5.5 0 0 1 .5.5m7-3.5v11l-4-4V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3.5m-7.5-1A1.5 1.5 0 0 0 8 8H4.5v1.5H8v1.75H5.5v1.5H8v1.75H4.5V16H8a1.5 1.5 0 0 0 1.5-1.5m6-5A1.5 1.5 0 0 0 14 8h-3v8h3a1.5 1.5 0 0 0 1.5-1.5"></svg:path>`,
})
export class MdiVideo3dVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
