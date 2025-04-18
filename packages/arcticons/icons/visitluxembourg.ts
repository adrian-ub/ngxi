import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVisitluxembourgIcon],svg[arcticons-visitluxembourg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5h7.276l7.367 7.36v7.284h-7.24L5.5 12.85zm36.998.001l-7.274.001l-7.367 7.358v7.284h7.24L42.5 12.85zM5.5 42.5h7.276l7.367-7.359l-.002-7.283h-7.238L5.5 35.15zm37 0h-7.276l-7.367-7.359v-7.284h7.241l7.401 7.294z"></svg:path>`,
})
export class ArcticonsVisitluxembourgIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
