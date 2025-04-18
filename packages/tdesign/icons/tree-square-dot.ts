import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTreeSquareDotIcon],svg[tdesign-tree-square-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2h7v7H13v2.333h6.5V15H22v7h-7v-7h2.5v-1.667h-11V15H9v7H2v-7h2.5v-3.667H11V9H8.5zm5 5V4h-3v3zM4 17v3h3v-3zm13 0v3h3v-3z"></svg:path>`,
})
export class TdesignTreeSquareDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
