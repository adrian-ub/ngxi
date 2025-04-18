import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorFillAccent16RegularIcon],svg[fluent-color-fill-accent-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.768 11.354a2.5 2.5 0 0 1-3.536 0L3.474 9.596A1.5 1.5 0 0 0 2.5 11v1A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.36-.866a2.5 2.5 0 0 1-3.352-2.52z"></svg:path>`,
})
export class FluentColorFillAccent16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
