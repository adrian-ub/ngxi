import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTextformatItalicIcon],svg[tdesign-textformat-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3H18v2h-3.67l-2.625 14H16.5v2H6v-2h3.67l2.625-14H7.5z"></svg:path>`,
})
export class TdesignTextformatItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
