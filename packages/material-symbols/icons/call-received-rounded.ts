import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCallReceivedRoundedIcon],svg[material-symbols-call-received-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20q-.425 0-.713-.288T5 19v-8q0-.425.288-.713T6 10q.425 0 .713.288T7 11v5.6L17.925 5.675Q18.2 5.4 18.6 5.4t.7.3q.275.275.275.7t-.275.7L8.4 18H14q.425 0 .713.288T15 19q0 .425-.288.713T14 20H6Z"></svg:path>`,
})
export class MaterialSymbolsCallReceivedRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
