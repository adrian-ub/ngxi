import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMpegFormatIcon],svg[iconoir-mpeg-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 6V3.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6V6M4 18v2.4a.6.6 0 0 0 .6.6h14.8a.6.6 0 0 0 .6-.6V18"></svg:path><svg:path stroke-linejoin="round" d="M7.5 15v-3m0 0V9h3v3zm-6 3V9L3 12l1.5-3v6m12-6h-3v6h3m6-6h-3v6h3v-2.4m-9-.6h2"></svg:path></svg:g>`,
})
export class IconoirMpegFormatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
