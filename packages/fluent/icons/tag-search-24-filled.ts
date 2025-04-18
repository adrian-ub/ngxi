import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTagSearch24FilledIcon],svg[fluent-tag-search-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4.25A2.25 2.25 0 0 0 19.75 2h-5.466a3.25 3.25 0 0 0-2.299.953l-8.5 8.51a3.25 3.25 0 0 0 .004 4.596l4.462 4.455a3.255 3.255 0 0 0 4.596-.001l.094-.094a5.5 5.5 0 1 1 7.777-7.779l.63-.63A3.25 3.25 0 0 0 22 9.712zm-6.5 2.752a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m4.668 12.105a4.5 4.5 0 1 0-1.06 1.06l2.612 2.613a.75.75 0 1 0 1.06-1.06zM19.5 16.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class FluentTagSearch24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
