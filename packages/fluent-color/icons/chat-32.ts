import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorChat32Icon],svg[fluent-color-chat-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorChat320)" d="M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14c-2.368 0-4.602-.589-6.56-1.629l-5.528 1.572A1.5 1.5 0 0 1 2.06 28.09l1.572-5.527A13.94 13.94 0 0 1 2 16m8-3a1 1 0 0 0 1 1h10a1 1 0 1 0 0-2H11a1 1 0 0 0-1 1m1 5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z"></svg:path><svg:path fill="url(#fluentColorChat321)" d="M10 13a1 1 0 0 0 1 1h10a1 1 0 1 0 0-2H11a1 1 0 0 0-1 1m1 5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z"></svg:path><svg:defs><svg:lineargradient id="fluentColorChat320" x1="3" x2="27.447" y1="7.25" y2="48.928" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#CC23D1"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorChat321" x1="11.05" x2="11.948" y1="12.14" y2="20.828" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#CCEAFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorChat32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
