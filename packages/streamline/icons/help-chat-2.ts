import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHelpChat2Icon],svg[streamline-help-chat-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.998.552a6.448 6.448 0 0 0-5.367 10.02L.55 13.447l3.62-.655A6.448 6.448 0 1 0 6.999.552Z"></svg:path><svg:path d="M5.51 5.512A1.488 1.488 0 1 1 6.998 7v.992M7 10.472a.248.248 0 0 1 0-.496m0 .496a.248.248 0 1 0 0-.496"></svg:path></svg:g>`,
})
export class StreamlineHelpChat2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
