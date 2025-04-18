import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCraneFillIcon],svg[ph-crane-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.12 17.14a8 8 0 0 0-7.88-.2L102 80H32a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h88a16 16 0 0 0 16-16v-32a7 7 0 0 0-.08-1.05v-.24a10 10 0 0 0-.22-1a.1.1 0 0 0 0-.05v-.07L113.54 92L216 37.33V160h-16v-8a8 8 0 0 0-16 0v8a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V24a8 8 0 0 0-3.88-6.86M48 96v64H32V96ZM32 200v-24h88v24Z"></svg:path>`,
})
export class PhCraneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
