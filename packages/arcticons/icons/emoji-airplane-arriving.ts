import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiAirplaneArrivingIcon],svg[arcticons-emoji-airplane-arriving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.216 24.807l11.982 3.41c.974.28 1.876.757 2.655 1.406c1.92 1.6 5.136 4.594 2.868 4.984c-3.116.535-18.49-4.04-22.983-5.456s-9.334-4.088-12.356-6.353c-2.645-1.982 1.505-1.287 1.505-1.287s4.776.704 6.74 1.208l4.11.863"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.045 22.581L8.95 13.664l-2.066-.698l1.004 8.545m21.297 7.885L17.01 18.152l-1.725-.073l6.4 10.08m-1.757 4.474a1.342 1.342 0 1 0 2.685 0a1.342 1.342 0 0 0-2.685 0m3.571 1.059a1.342 1.342 0 1 0 2.684 0a1.342 1.342 0 0 0-2.684 0"></svg:path>`,
})
export class ArcticonsEmojiAirplaneArrivingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
