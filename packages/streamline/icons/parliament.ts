import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineParliamentIcon],svg[streamline-parliament-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.481 8.68h7.037v4.71H3.481zm1.588-2.702h3.81"></svg:path><svg:path d="M5.943 11.628c0-.584.473-1.057 1.057-1.057v0c.584 0 1.058.473 1.058 1.057v1.761H5.943zM5.067 8.68V5.968l1.91-2.938l1.91 2.938v2.71M.59 6.71v6.68h2.892V6.71L2.036 4.513L.59 6.711Zm9.929 0v6.68h2.89V6.71l-1.445-2.198l-1.445 2.199Z"></svg:path><svg:path d="M6.977 3.031V.55h1.25"></svg:path></svg:g>`,
})
export class StreamlineParliamentIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
