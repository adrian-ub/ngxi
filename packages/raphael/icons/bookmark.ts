import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelBookmarkIcon],svg[raphael-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.396 1.84L6.076 25.987l7.34-4.566l1.187 8.564l11.32-24.146l-8.527-3.997zm1.735 7.394a1.125 1.125 0 0 1 .956-2.037a1.124 1.124 0 1 1-.955 2.036z"></svg:path>`,
})
export class RaphaelBookmarkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
