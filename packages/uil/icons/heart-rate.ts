import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilHeartRateIcon],svg[uil-heart-rate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11h-3.94a.8.8 0 0 0-.21 0h-.17a1 1 0 0 0-.15.1a2 2 0 0 0-.16.12a1 1 0 0 0-.09.13a1.3 1.3 0 0 0-.12.2l-1.6 4.41l-4.17-11.3a1 1 0 0 0-1.88 0L6.2 11H3a1 1 0 0 0 0 2h4.3a1 1 0 0 0 .16-.1a2 2 0 0 0 .16-.12l.09-.13a1 1 0 0 0 .12-.2l1.62-4.53l4.16 11.42a1 1 0 0 0 .94.66a1 1 0 0 0 .94-.66l2.3-6.34H21a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilHeartRateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
