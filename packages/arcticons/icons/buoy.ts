import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBuoyIcon],svg[arcticons-buoy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.639 38.139L24 44.5l6.361-6.361m-20.5-20.5L3.5 24l6.361 6.361m20.5-20.5L24 3.5l-6.361 6.361m20.5 20.5L44.5 24l-6.361-6.361M24 16.5l7.5 7.5l-7.5 7.501l-7.5-7.5z"></svg:path>`,
})
export class ArcticonsBuoyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
