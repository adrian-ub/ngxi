import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorComment16Icon],svg[fluent-color-comment-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorComment160)" d="M3.5 2A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H4v1.942a.98.98 0 0 0 1.625.738L8.688 12H12.5A2.5 2.5 0 0 0 15 9.5v-5A2.5 2.5 0 0 0 12.5 2z"></svg:path><svg:defs><svg:radialgradient id="fluentColorComment160" cx="0" cy="0" r="1" gradientTransform="matrix(16.79335 18.19304 -33.08628 30.54076 -2.23 -1.977)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FAB500"></svg:stop><svg:stop offset=".535" stop-color="#FE8401"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorComment16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
