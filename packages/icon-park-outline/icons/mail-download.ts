import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMailDownloadIcon],svg[icon-park-outline-mail-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 18H4v24h40V18h-6"></svg:path><svg:path d="M38 6H10v16.5L24 33l14-10.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 22.5L24 33l14-10.5m-28 0V6h28v16.5m-28 0L4 18m34 4.5l6-4.5m-25 1l5 5m0 0l5-5m-5 5V13"></svg:path></svg:g>`,
})
export class IconParkOutlineMailDownloadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
