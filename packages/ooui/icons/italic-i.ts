import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiItalicIIcon],svg[ooui-italic-i-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 19l.33-1.51l2.17-.66l2.9-13.66l-1.9-.63L9 1h7l-.71 1.6l-2.29.57l-2.83 13.66l2.14.66L12 19z"></svg:path>`,
})
export class OouiItalicIIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
