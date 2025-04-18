import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextGrammarCheckmark24FilledIcon],svg[fluent-text-grammar-checkmark-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m2.646 3.146l-4.092 4.093L14.9 17.7a.5.5 0 0 0-.8.6l1.5 2a.5.5 0 0 0 .754.053l4.5-4.5a.5.5 0 0 0-.707-.707M11.02 17H3l-.117.007A1 1 0 0 0 3 19h8.174a6.5 6.5 0 0 1-.155-2m.48-2H3a1 1 0 0 1-.117-1.993L3 13h9.81a6.5 6.5 0 0 0-1.312 2M3 11a1 1 0 0 1-.117-1.993L3 9h18a1 1 0 0 1 .117 1.993L21 11zm18-6H3l-.117.007A1 1 0 0 0 3 7h18l.117-.007A1 1 0 0 0 21 5"></svg:path>`,
})
export class FluentTextGrammarCheckmark24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
