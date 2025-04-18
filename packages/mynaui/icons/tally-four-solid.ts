import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTallyFourSolidIcon],svg[mynaui-tally-four-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 4 3.25m5.333 0a.75.75 0 0 1 .75.75v16a.75.75 0 1 1-1.5 0V4a.75.75 0 0 1 .75-.75m5.334 0a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75m5.333 0a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiTallyFourSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
