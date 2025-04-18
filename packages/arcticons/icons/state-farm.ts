import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStateFarmIcon],svg[arcticons-state-farm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="14.25" cy="29.686" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.06" ry="4.035"></svg:ellipse><svg:ellipse cx="14.25" cy="29.633" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="9.75" ry="6.548"></svg:ellipse><svg:ellipse cx="24" cy="18.352" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.06" ry="4.035"></svg:ellipse><svg:ellipse cx="24" cy="18.299" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="9.75" ry="6.548"></svg:ellipse><svg:ellipse cx="33.75" cy="29.754" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.06" ry="4.035"></svg:ellipse><svg:ellipse cx="33.75" cy="29.701" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="9.75" ry="6.548"></svg:ellipse>`,
})
export class ArcticonsStateFarmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
