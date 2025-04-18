import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCurrencyLiraRoundedIcon],svg[material-symbols-currency-lira-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20v-4.15l-1.475.925q-.5.325-1.012.025T6 15.9q0-.275.125-.5t.35-.35L9 13.475v-2.35l-1.475.925q-.5.3-1.012.025T6 11.2q0-.275.125-.5t.325-.35L9 8.75V4q0-.425.288-.712T10 3t.713.288T11 4v3.5l2.475-1.55q.5-.325 1.013-.038T15 6.8q0 .275-.125.5t-.35.35L11 9.875v2.35l2.475-1.55q.5-.325 1.013-.038t.512.888q0 .275-.125.5t-.35.35L11 14.6V19q1.875 0 3.25-1.2t1.675-3q.05-.375.363-.587T17 14q.425 0 .713.275t.237.65q-.35 2.6-2.3 4.338T11 21h-1q-.425 0-.712-.288T9 20"></svg:path>`,
})
export class MaterialSymbolsCurrencyLiraRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
