import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiDownloadOutlinedIcon],svg[weui-download-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.8 8.2H16V7h3.001c.55 0 .999.446.999.996v13.008a1 1 0 0 1-.996.996H4.996A1 1 0 0 1 4 21.004V7.996A1 1 0 0 1 4.999 7H8v1.2H5.2v12.6h13.6zm-6.2 4.417l2.087-2.087l.849.849l-2.829 2.828a1 1 0 0 1-1.414 0L8.464 11.38l.849-.849l2.087 2.087V2h1.2z"></svg:path>`,
})
export class WeuiDownloadOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
