import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorComment20Icon],svg[fluent-color-comment-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorComment200)" d="M6.799 17.803a1.01 1.01 0 0 1-1.4-.199a.98.98 0 0 1-.199-.59v-2.172h-.6c-1.436 0-2.6-1.149-2.6-2.566v-6.71C2 4.149 3.164 3 4.6 3h10.8C16.836 3 18 4.149 18 5.566v6.71c0 1.418-1.164 2.566-2.6 2.566h-4.59z"></svg:path><svg:defs><svg:radialgradient id="fluentColorComment200" cx="0" cy="0" r="1" gradientTransform="rotate(47.732 .98 -2.72)scale(28.5343 51.823)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FAB500"></svg:stop><svg:stop offset=".535" stop-color="#FE8401"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorComment20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
