import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDisplayGridIcon],svg[gg-display-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 7v4h4V7zm6 0h4v4h-4zm0 6v4h4v-4zm-6 0h4v4H7z"></svg:path><svg:path fill-rule="evenodd" d="M3 3h18v18H3zm2 2v14h14V5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDisplayGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
