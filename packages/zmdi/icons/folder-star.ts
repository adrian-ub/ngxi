import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFolderStarIcon],svg[zmdi-folder-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 21h128l42 43h171q18 0 30.5 12.5T427 107v213q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21m233 107l-25 60l-65 5l49 43l-15 63l56-33l56 33l-14-63l49-43l-65-5z"></svg:path>`,
})
export class ZmdiFolderStarIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
