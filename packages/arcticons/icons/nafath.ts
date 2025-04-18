import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNafathIcon],svg[arcticons-nafath-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 17.175c0 .44-.356.796-.796.796h0a.796.796 0 0 1-.796-.796h0c0-.44.356-.796.796-.796h0c.44 0 .796.356.796.796m-12.55.367a.796.796 0 1 1-1.592 0a.796.796 0 0 1 1.592 0m-13.4.158v10.854a3.055 3.055 0 0 0 3.048 3.062h6.81c1.714 0 5.779.355 6.407-4.95c.357-3.014-2.256-4.199-3.632-4.199s-3.99 1.185-3.633 4.199c.629 5.305 4.693 4.95 6.358 4.95h6.747a3.055 3.055 0 0 0 3.062-3.048v-5.601"></svg:path><svg:circle cx="9.278" cy="17.104" r=".692" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 31.581h4.206c6.108 0 2.885-7.702.017-8.696"></svg:path>`,
})
export class ArcticonsNafathIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
