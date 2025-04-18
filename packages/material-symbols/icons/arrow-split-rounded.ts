import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsArrowSplitRoundedIcon],svg[material-symbols-arrow-split-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13q-.425 0-.712-.288T4 12t.288-.712T5 11h6.6l5-5H15q-.425 0-.712-.288T14 5t.288-.712T15 4h4q.425 0 .713.288T20 5v4q0 .425-.288.713T19 10t-.712-.288T18 9V7.4l-5.025 5.025q-.275.275-.637.425t-.763.15zm10 7q-.425 0-.712-.288T14 19t.288-.712T15 18h1.6l-2.475-2.45q-.3-.3-.3-.712t.3-.713t.725-.3t.725.3L18 16.6V15q0-.425.288-.712T19 14t.713.288T20 15v4q0 .425-.288.713T19 20z"></svg:path>`,
})
export class MaterialSymbolsArrowSplitRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
