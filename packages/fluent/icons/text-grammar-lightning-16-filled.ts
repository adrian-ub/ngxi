import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextGrammarLightning16FilledIcon],svg[fluent-text-grammar-lightning-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3.75A.75.75 0 0 1 1.75 3h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 3.75m0 3A.75.75 0 0 1 1.75 6h6.418l-.625 1.5H1.75A.75.75 0 0 1 1 6.75M6.087 12c.202.567.74 1 1.415 1h.469l-.125.5H1.75a.75.75 0 0 1 0-1.5zm.831-3l-.625 1.5H1.75a.75.75 0 0 1 0-1.5zm.584 3h1.75l-.59 2.36c-.12.482.463.826.827.486l4.872-4.548A.75.75 0 0 0 13.85 9h-1.098l.781-2.342A.5.5 0 0 0 13.06 6H9.586a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .461.692"></svg:path>`,
})
export class FluentTextGrammarLightning16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
