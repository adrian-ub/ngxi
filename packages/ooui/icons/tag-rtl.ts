import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTagRtlIcon],svg[ooui-tag-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.6 18.7c.4.4 1 .4 1.4 0L18.7 9q.3-.3.3-.6V2c0-.6-.4-1-1-1h-6.4c-.2 0-.5.1-.6.3L1.3 11c-.4.4-.4 1-.1 1.3zM13 5c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2"></svg:path>`,
})
export class OouiTagRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
