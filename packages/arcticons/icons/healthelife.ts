import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHealthelifeIcon],svg[arcticons-healthelife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="20.51" cy="23.56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.22" ry="10.21" transform="rotate(-20 20.523 23.56)"></svg:ellipse><svg:ellipse cx="14.75" cy="28.84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.22" ry="10.21" transform="rotate(-65 14.751 28.839)"></svg:ellipse><svg:ellipse cx="27.49" cy="23.56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="10.21" ry="4.22" transform="rotate(-70 27.495 23.562)"></svg:ellipse><svg:ellipse cx="33.25" cy="28.84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="10.21" ry="4.22" transform="rotate(-25 33.242 28.831)"></svg:ellipse>`,
})
export class ArcticonsHealthelifeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
