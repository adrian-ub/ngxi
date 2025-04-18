import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAutocorrect24FilledIcon],svg[fluent-autocorrect-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.594 4.723a3 3 0 0 1 .948.947l2.872 4.58H21.5a1 1 0 0 1 0 2l-2.75-.002a5 5 0 1 1-4-1.999h.303l-.284-.452l-1.922-3.064a1 1 0 0 0-1.626-.095l-.068.095L3.597 18.78a1 1 0 0 1-1.75-.96l.056-.103L9.459 5.67a3 3 0 0 1 4.135-.947m1.156 7.527a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path>`,
})
export class FluentAutocorrect24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
