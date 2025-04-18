import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagComorosIcon],svg[twemoji-flag-for-flag-comoros-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3A75C4" d="M0 18v9a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-9H0z"></svg:path><svg:path fill="#FFC61E" d="M36 18V9a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v9h36z"></svg:path><svg:path fill="#CE1126" d="M0 18h36v6.5H0z"></svg:path><svg:path fill="#EEE" d="M0 11.5h36V18H0z"></svg:path><svg:path fill="#3D8E33" d="M1.351 6.004H1.35A3.991 3.991 0 0 0 0 9v18c0 1.193.522 2.264 1.351 2.997L17.5 18L1.351 6.004z"></svg:path><svg:g fill="#FFF"><svg:path d="M3.926 18a5.52 5.52 0 0 1 4.295-5.38a5.514 5.514 0 0 0-1.227-.142a5.522 5.522 0 1 0 0 11.044c.422 0 .832-.052 1.227-.142A5.52 5.52 0 0 1 3.926 18z"></svg:path><svg:path d="M7.62 14.875l.601-.437l.601.437l-.23-.706l.601-.437H8.45l-.229-.707l-.23.707h-.743l.601.437zm0 2.635l.601-.437l.601.437l-.23-.707l.601-.436H8.45l-.229-.707l-.23.707h-.743l.601.436zm0 2.635l.601-.437l.601.437l-.23-.707l.601-.437H8.45l-.229-.706l-.23.706h-.743l.601.437zm.601 2.198l.601.436l-.23-.706l.601-.437H8.45l-.229-.706l-.23.706h-.743l.601.437l-.229.706z"></svg:path></svg:g>`,
})
export class TwemojiFlagForFlagComorosIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
