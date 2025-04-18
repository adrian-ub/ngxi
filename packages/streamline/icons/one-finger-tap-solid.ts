import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineOneFingerTapSolidIcon],svg[streamline-one-finger-tap-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.254 4.361a2.861 2.861 0 1 1 5.647.651a.75.75 0 0 0 1.461.34a4.361 4.361 0 1 0-8.495 0a.75.75 0 0 0 1.461-.34a3 3 0 0 1-.074-.651m1.63 5.335V4.26a1.26 1.26 0 0 1 2.518 0v4.077h2.464a2.573 2.573 0 0 1 2.573 2.573V13a1 1 0 0 1-1 1H4.83a1 1 0 0 1-.823-.433l-.764-1.11a1.715 1.715 0 0 1 1.097-2.66l.543-.102Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOneFingerTapSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
