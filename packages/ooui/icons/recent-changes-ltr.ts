import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiRecentChangesLtrIcon],svg[ooui-recent-changes-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h16v2H1zm0 6h11v2H1zm0 6h7v2H1zm17.8-3.1l1-1.1a.6.6 0 0 0 0-.8L18 8.2a.6.6 0 0 0-.8 0l-1 1zm-3.3-2L10 15.3V18h2.6l5.6-5.5l-2.7-2.7Z"></svg:path>`,
})
export class OouiRecentChangesLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
