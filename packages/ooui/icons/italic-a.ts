import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiItalicAIcon],svg[ooui-italic-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 19l9.992-18H16l2 18h-3l-.4-5H8.5L6 19zm7-8h4.5c-.051-.69-.483-6.429-.5-7c-.255.588-3.693 6.361-4 7"></svg:path>`,
})
export class OouiItalicAIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
