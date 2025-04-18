import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorArrowSync20Icon],svg[fluent-color-arrow-sync-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorArrowSync200)" fill-rule="evenodd" d="M8.293.293a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414-1.414l.701-.701a5.502 5.502 0 0 0-2.508 9.64a1 1 0 0 1-1.279 1.537a7.501 7.501 0 0 1 3.928-13.22l-.842-.842a1 1 0 0 1 0-1.414m5.12 4.085a1 1 0 0 1 1.409-.123a7.501 7.501 0 0 1-3.957 13.195l.842.843a1 1 0 0 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 1.414l-.701.701a5.502 5.502 0 0 0 2.53-9.621a1 1 0 0 1-.123-1.41" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorArrowSync200" x1="14" x2="6" y1="16.5" y2="0" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#22918B"></svg:stop><svg:stop offset="1" stop-color="#20AC9D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorArrowSync20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
