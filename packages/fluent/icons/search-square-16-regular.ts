import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSearchSquare16RegularIcon],svg[fluent-search-square-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zM3 4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5zM5 7a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-3a3 3 0 1 0 1.738 5.445l2.408 2.409a.5.5 0 0 0 .708-.708L9.445 8.738A3 3 0 0 0 7 4"></svg:path>`,
})
export class FluentSearchSquare16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
