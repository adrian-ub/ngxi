import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAsanaIcon],svg[arcticons-asana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="13.3" cy="33.42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.8" ry="7.71"></svg:ellipse><svg:ellipse cx="34.7" cy="33.42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.8" ry="7.71"></svg:ellipse><svg:ellipse cx="24" cy="14.58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.8" ry="7.71"></svg:ellipse>`,
})
export class ArcticonsAsanaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
