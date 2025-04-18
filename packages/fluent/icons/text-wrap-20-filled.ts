import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextWrap20FilledIcon],svg[fluent-text-wrap-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.25m0 5a.75.75 0 0 1 .75-.75h13a3.25 3.25 0 0 1 0 6.5h-3.399l.225.27a.75.75 0 0 1-1.152.96l-1.25-1.5a.75.75 0 0 1 0-.96l1.25-1.5a.75.75 0 0 1 1.152.96l-.225.27h3.399a1.75 1.75 0 1 0 0-3.5h-13A.75.75 0 0 1 2 9.25m0 5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentTextWrap20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
