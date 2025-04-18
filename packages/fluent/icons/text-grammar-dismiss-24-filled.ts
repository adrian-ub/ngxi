import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextGrammarDismiss24FilledIcon],svg[fluent-text-grammar-dismiss-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m-2.476 3.024a.5.5 0 0 0 0 .707l1.769 1.77l-1.767 1.766a.5.5 0 1 0 .707.708l1.767-1.767l1.77 1.769a.5.5 0 1 0 .707-.707l-1.769-1.77l1.771-1.77a.5.5 0 0 0-.707-.707l-1.771 1.77l-1.77-1.77a.5.5 0 0 0-.707 0M11.019 17H3l-.117.007A1 1 0 0 0 3 19h8.174a6.5 6.5 0 0 1-.155-2m.48-2H3a1 1 0 0 1-.117-1.993L3 13h9.81a6.5 6.5 0 0 0-1.312 2M3 11a1 1 0 0 1-.117-1.993L3 9h18a1 1 0 0 1 .117 1.993L21 11zm18-6H3l-.117.007A1 1 0 0 0 3 7h18l.117-.007A1 1 0 0 0 21 5"></svg:path>`,
})
export class FluentTextGrammarDismiss24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
