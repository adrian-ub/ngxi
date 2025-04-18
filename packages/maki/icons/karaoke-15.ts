import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiKaraoke15Icon],svg[maki-karaoke-15-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12.1 2.952a2.988 2.988 0 0 0-5.11 1.965l3.142 3.142A2.988 2.988 0 0 0 12.1 2.952z" fill="currentColor"></svg:path><svg:path d="M4.672 8.255L2.55 10.377a1 1 0 0 0 0 1.414l.707.707a1 1 0 0 0 1.414 0l2.121-2.121l2.122-2.122l-2.121-2.121zm.741 2.087l-.707-.707l2.087-2.087l.707.707z" fill="currentColor"></svg:path>`,
})
export class MakiKaraoke15Icon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
