import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTreeSquareDotFilledIcon],svg[tdesign-tree-square-dot-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16h-2v6h6v-6h-2v-4.667h-7V8h2V2H9v6h2v3.333H4V16H2v6h6v-6H6v-2.667h12z"></svg:path>`,
})
export class TdesignTreeSquareDotFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
