import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiBallotBoxWithCheckIcon],svg[arcticons-emoji-ballot-box-with-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.039 5.5C23.447 23.867 20.612 36.583 20.612 36.583s-2.835-7.064-5.67-9.89"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.727 18.776h22.268c.423 0 .768.344.768.767v22.192a.766.766 0 0 1-.766.765H9.73a.77.77 0 0 1-.768-.768V19.541c0-.423.343-.765.766-.765"></svg:path>`,
})
export class ArcticonsEmojiBallotBoxWithCheckIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
