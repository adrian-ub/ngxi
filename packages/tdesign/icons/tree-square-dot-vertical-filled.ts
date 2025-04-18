import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTreeSquareDotVerticalFilledIcon],svg[tdesign-tree-square-dot-vertical-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6v2h6V2h-6v2h-4.667v7H8V9H2v6h6v-2h3.333v7H16v2h6v-6h-6v2h-2.667V6z"></svg:path>`,
})
export class TdesignTreeSquareDotVerticalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
