import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatListChecksIcon],svg[mdi-format-list-checks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h6v6H3zm2 2v2h2V7zm6 0h10v2H11zm0 8h10v2H11zm-6 5l-3.5-3.5l1.41-1.41L5 17.17l4.59-4.58L11 14z"></svg:path>`,
})
export class MdiFormatListChecksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
