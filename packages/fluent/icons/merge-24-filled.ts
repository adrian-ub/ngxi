import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMerge24FilledIcon],svg[fluent-merge-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7a1 1 0 0 1 1-1h2.757a4 4 0 0 1 2.829 1.172l2.95 2.95a3 3 0 0 0 2.12.878h3.928l-3.29-3.289a1 1 0 0 1 1.413-1.414l5 4.996a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L18.586 13h-3.969a3 3 0 0 0-2.081.879l-2.95 2.95A4 4 0 0 1 6.757 18H4a1 1 0 1 1 0-2h2.757a2 2 0 0 0 1.415-.586l2.95-2.95q.252-.252.535-.464a5 5 0 0 1-.536-.464l-2.95-2.95A2 2 0 0 0 6.758 8H4a1 1 0 0 1-1-1"></svg:path>`,
})
export class FluentMerge24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
