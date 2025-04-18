import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCycleOneIcon],svg[icon-park-twotone-cycle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCycleOne0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 20Q6 8 18 8m22 22q0 12-12 12"></svg:path><svg:path fill="#555" d="M28 18c0-5.523 4.477-10 10-10h4v14H28zM6 28h14v4c0 5.523-4.477 10-10 10H6z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCycleOne0)"></svg:path>`,
})
export class IconParkTwotoneCycleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
