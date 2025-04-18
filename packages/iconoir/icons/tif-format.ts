import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTifFormatIcon],svg[iconoir-tif-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 6V3.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6V6"></svg:path><svg:path stroke-linejoin="round" d="M15 15V9h3M6.5 9H8m1.5 0H8m0 0v6m7-3h2.5M12 15V9"></svg:path><svg:path d="M4 18v2.4a.6.6 0 0 0 .6.6h14.8a.6.6 0 0 0 .6-.6V18"></svg:path></svg:g>`,
})
export class IconoirTifFormatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
