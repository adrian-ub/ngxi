import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBankIcon],svg[cil-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.759 14.358L16 125.946V184h480v-58.362ZM464 152H48v-5.946l200.241-96.412L464 146.362ZM48 408h416v32H48zm-32 56h480v32H16zm40-248h32v160H56zm368 0h32v160h-32zm-96 0h32v160h-32zm-176 0h32v160h-32zm88 0h32v160h-32z"></svg:path>`,
})
export class CilBankIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
