import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsPreventLineBreak16Icon],svg[qlementine-icons-prevent-line-break-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M16 .5a.5.5 0 0 0-1 0V4H1.7L4.85.85a.5.5 0 0 0-.707-.707l-4 4a.5.5 0 0 0 0 .707l4 4a.5.5 0 0 0 .707-.707L1.7 4.993H15a1 1 0 0 0 1-1v-3.5z"></svg:path><svg:rect width="8" height="5" x="8" y="11" fill="currentColor" rx="1"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" d="M9.5 13.5V10A2.5 2.5 0 0 1 12 7.5v0a2.5 2.5 0 0 1 2.5 2.5v3.5"></svg:path></svg:g>`,
})
export class QlementineIconsPreventLineBreak16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
