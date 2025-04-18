import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSmartToyRoundedIcon],svg[material-symbols-light-smart-toy-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 14q-.846 0-1.423-.577T3 12t.577-1.423T5 10V7q0-.397.302-.699T6 6h4q0-.846.577-1.423T12 4t1.423.577T14 6h4q.397 0 .699.302T19 7v3q.846 0 1.423.577T21 12t-.577 1.423T19 14v5q0 .397-.302.699T18 20H6q-.397 0-.699-.302T5 19zm3.998-1.5q.416 0 .709-.291t.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293m6 0q.416 0 .709-.291t.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293M9 16.5h6q.213 0 .356-.144t.144-.357t-.144-.356T15 15.5H9q-.213 0-.356.144t-.144.357t.144.356T9 16.5"></svg:path>`,
})
export class MaterialSymbolsLightSmartToyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
