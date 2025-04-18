import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextItalicIcon],svg[carbon-text-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 9V7H12v2h5.14l-4.37 14H7v2h13v-2h-5.14l4.37-14z"></svg:path>`,
})
export class CarbonTextItalicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
