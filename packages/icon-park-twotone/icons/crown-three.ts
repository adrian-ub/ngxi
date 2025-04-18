import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCrownThreeIcon],svg[icon-park-twotone-crown-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCrownThree0"><svg:g fill="#555" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 42h22l6-21l-10 5l-7-14l-7 14l-10-5z"></svg:path><svg:circle cx="7" cy="18" r="3"></svg:circle><svg:circle cx="24" cy="9" r="3"></svg:circle><svg:circle cx="41" cy="18" r="3"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCrownThree0)"></svg:path>`,
})
export class IconParkTwotoneCrownThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
