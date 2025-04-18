import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTipiThinIcon],svg[ph-tipi-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.37 213.84L132.75 53.5l22.62-35.34a4 4 0 1 0-6.74-4.32L128 46.08l-20.63-32.24a4 4 0 0 0-6.74 4.32l22.62 35.34L20.63 213.84A4 4 0 0 0 24 220h208a4 4 0 0 0 3.37-6.16M79 212l49-76.58L177 212Zm107.52 0l-55.14-86.16a4 4 0 0 0-6.74 0L69.49 212H31.31L128 60.92L224.69 212Z"></svg:path>`,
})
export class PhTipiThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
