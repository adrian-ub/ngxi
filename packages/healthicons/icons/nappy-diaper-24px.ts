import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsNappyDiaper24pxIcon],svg[healthicons-nappy-diaper-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3.281 4C2.574 4 2 4.57 2 5.274v1.76h2.963c.555 0 1.005.447 1.005.999s-.45 1-1.005 1H2v1.027q0 .75.109 1.47h.764c4.443 0 8.042 3.586 8.042 8v.412a10 10 0 0 0 2.17 0v-.412c0-4.414 3.6-8 8.042-8h.764q.108-.72.109-1.47V9.032h-2.963a1 1 0 0 1-1.005-1c0-.551.45-.998 1.005-.998H22v-1.76C22 4.57 21.426 4 20.718 4z"></svg:path><svg:path d="M21.374 13.529h-.247c-3.325 0-6.023 2.68-6.032 5.986a10 10 0 0 0 6.28-5.986m-12.47 5.986c-.009-3.306-2.707-5.986-6.032-5.986h-.247a10 10 0 0 0 6.279 5.986"></svg:path></svg:g>`,
})
export class HealthiconsNappyDiaper24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
