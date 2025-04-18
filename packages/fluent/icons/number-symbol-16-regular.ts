import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberSymbol16RegularIcon],svg[fluent-number-symbol-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.992 2.592a.5.5 0 1 0-.984-.18L5.538 5H3.495a.5.5 0 0 0 0 1h1.86l-.728 4H2.5a.5.5 0 0 0 0 1h1.946l-.44 2.41a.5.5 0 0 0 .985.18L5.462 11h3.982l-.439 2.409a.5.5 0 0 0 .984.18l.472-2.59H12.5a.5.5 0 0 0 0-1h-1.857l.728-3.998H13.5a.5.5 0 1 0 0-1h-1.946l.439-2.409a.5.5 0 1 0-.984-.179l-.472 2.588H6.554zM6.372 6h3.983l-.729 4H5.644z"></svg:path>`,
})
export class FluentNumberSymbol16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
