import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiRecentChangesRtlIcon],svg[ooui-recent-changes-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H3v2h16zm0 6h-7v2h7zm0 6H8v2h11zM8.8 11.9l1-1.1a.6.6 0 0 0 0-.8L8 8.2a.6.6 0 0 0-.8 0l-1 1L8.7 12zm-3.3-2L0 15.3V18h2.6l5.6-5.5l-2.7-2.7Z"></svg:path>`,
})
export class OouiRecentChangesRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
