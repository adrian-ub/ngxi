import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPageWithCurlIcon],svg[openmoji-page-with-curl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9B9B9A" d="M56 48.821V10.958H15.037v41.307l39.427-1.348"></svg:path><svg:path fill="#9B9B9A" d="M56 48.821V10.958H16v30.153"></svg:path><svg:path fill="#D0CFCE" d="m47.972 38.149l-34.133 7.503l.814 10.789l31.189-4.164l3.273-.437L53 51.321z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M56 48.821V10.958H16v30.153"></svg:path><svg:path d="m47.972 38.149l-34.133 7.503l.814 10.789l31.189-4.164l3.273-.437L53 51.321zM20.622 16H36m-15.378 5.328H51.66M20.622 32.221H51.66m-31.038 5.406h12.771M20.622 26.814H51.66M56 48.321a3 3 0 0 1-3 3"></svg:path></svg:g>`,
})
export class OpenmojiPageWithCurlIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
