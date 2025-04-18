import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSecurityUpdateGoodRoundedIcon],svg[material-symbols-security-update-good-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.05 12.2l2.85-2.85q.275-.275.7-.275t.7.275t.275.7t-.275.7l-3.55 3.55q-.3.3-.7.3t-.7-.3l-1.4-1.4q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275zM7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5h10V6H7z"></svg:path>`,
})
export class MaterialSymbolsSecurityUpdateGoodRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
