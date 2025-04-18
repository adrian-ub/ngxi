import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLine24FilledIcon],svg[fluent-color-line-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.382 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-6.454l-1.316 1.314a3.25 3.25 0 0 1-1.362.813l-4.293 1.288a2 2 0 0 1-2.479-2.528zM18.648 2.944a3.22 3.22 0 0 1-.002 4.551l-7.123 7.111a2.25 2.25 0 0 1-.942.563l-4.294 1.289a1 1 0 0 1-1.239-1.265l1.362-4.228c.11-.34.298-.65.552-.902l7.132-7.122a3.22 3.22 0 0 1 4.554.003"></svg:path>`,
})
export class FluentColorLine24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
