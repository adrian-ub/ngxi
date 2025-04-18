import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMailDownloadIcon],svg[icon-park-twotone-mail-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMailDownload0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 18H4v24h40V18h-6"></svg:path><svg:path fill="#555" d="M38 6H10v16.5L24 33l14-10.5z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 22.5L24 33l14-10.5m-28 0V6h28v16.5m-28 0L4 18m34 4.5l6-4.5m-25 1l5 5m0 0l5-5m-5 5V13"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMailDownload0)"></svg:path>`,
})
export class IconParkTwotoneMailDownloadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
