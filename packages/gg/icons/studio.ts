import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggStudioIcon],svg[gg-studio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 13h-4v4h4z"></svg:path><svg:path fill-rule="evenodd" d="M3 3h18v18H3zm2 2h14v14H5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgStudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
