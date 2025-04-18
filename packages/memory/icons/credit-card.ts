import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCreditCardIcon],svg[memory-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h18v1h1v12h-1v1H2v-1H1V5h1zm1 2v2h16V6zm0 10h16v-5H3z"></svg:path>`,
})
export class MemoryCreditCardIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
