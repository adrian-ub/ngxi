import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGogumaIcon],svg[arcticons-goguma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.548v36.904l7.238-7.303H42.5v-29.6zm15.51 6.203v16.776m5.947-16.776v16.776M15.905 16.922h16.093m0 6.336H15.905"></svg:path>`,
})
export class ArcticonsGogumaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
