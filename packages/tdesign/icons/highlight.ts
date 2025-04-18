import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHighlightIcon],svg[tdesign-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h3.5v2H4v1.5H2zm5.5 0h3v2h-3zm5 0h3v2h-3zm5 0H21v3.5h-2V4h-1.5zM4 7.5v3H2v-3zm17 0v3h-2v-3zm-17 5v3H2v-3zM20 14v2h-2.586l4 4L20 21.414l-4-4V20h-2v-6zM4 17.5V19h1.5v2H2v-3.5zM7.5 19h3v2h-3z"></svg:path>`,
})
export class TdesignHighlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
