import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTypeItalicIcon],svg[mynaui-type-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 3H9m6 18H5m9.5-18L10 21"></svg:path>`,
})
export class MynauiTypeItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
