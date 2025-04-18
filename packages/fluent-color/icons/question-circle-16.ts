import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorQuestionCircle16Icon],svg[fluent-color-question-circle-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorQuestionCircle160)" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8"></svg:path><svg:path fill="url(#fluentColorQuestionCircle161)" d="M8 10.5A.75.75 0 1 0 8 12a.75.75 0 0 0 0-1.5m0-6a2 2 0 0 0-2 2a.5.5 0 0 0 1 0a1 1 0 0 1 2 0c0 .37-.083.58-.366.898l-.116.125l-.264.27C7.712 8.36 7.5 8.768 7.5 9.5a.5.5 0 0 0 1 0c0-.37.083-.58.366-.898l.116-.125l.264-.27C9.788 7.64 10 7.232 10 6.5a2 2 0 0 0-2-2"></svg:path><svg:defs><svg:lineargradient id="fluentColorQuestionCircle160" x1="2" x2="14" y1="2" y2="14" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorQuestionCircle161" x1="6.35" x2="8.557" y1="4.632" y2="12.221" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#CCEAFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorQuestionCircle16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
