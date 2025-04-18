import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretUp24RegularIcon],svg[fluent-caret-up-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.161 14.907c-.707.809-.133 2.073.941 2.073h11.796c1.074 0 1.648-1.264.941-2.073l-5.522-6.31a1.75 1.75 0 0 0-2.634 0zm1.492.573l5.159-5.896a.25.25 0 0 1 .376 0l5.16 5.897z"></svg:path>`,
})
export class FluentCaretUp24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
