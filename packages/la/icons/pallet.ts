import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laPalletIcon],svg[la-pallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.125 5L6 5.844l-2 14V27h6v-2h12v2h6v-7.156l-2-14L25.875 5zm1.75 2h2.063l-.876 12H6.156zm4.063 0H15v12h-3.938zM17 7h3.063l.875 12H17zm5.063 0h2.062l1.719 12h-2.907zM6 21h20v4h-2v-2H8v2H6z"></svg:path>`,
})
export class LaPalletIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
