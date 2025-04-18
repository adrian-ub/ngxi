import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInshotIcon],svg[arcticons-inshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 9.611h28.889a4.01 4.01 0 0 1 4 4v18.097m4.111 6.681H13.611a4.01 4.01 0 0 1-4-4v-18.2m0-6.578V5.5m28.778 32.889V42.5"></svg:path>`,
})
export class ArcticonsInshotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
