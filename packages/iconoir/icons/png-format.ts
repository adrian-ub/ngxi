import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPngFormatIcon],svg[iconoir-png-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M4.5 15v-3m0 0V9h3v3zm6 3V9l3 6V9m6 0h-3v6h3v-2.4"></svg:path><svg:path d="M4 6V3.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6V6M4 18v2.4a.6.6 0 0 0 .6.6h14.8a.6.6 0 0 0 .6-.6V18"></svg:path></svg:g>`,
})
export class IconoirPngFormatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
