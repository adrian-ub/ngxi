import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBowIcon],svg[streamline-bow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 2.82s5.107-.928 8.357 2.322s2.322 8.357 2.322 8.357m-8.822-1.856L13.5.5m-2.786 0H13.5v2.786M2.357 2.698V13.5m8.944-1.857H.5"></svg:path>`,
})
export class StreamlineBowIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
