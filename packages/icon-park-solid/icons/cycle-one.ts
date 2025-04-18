import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCycleOneIcon],svg[icon-park-solid-cycle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 20Q6 8 18 8m22 22q0 12-12 12"></svg:path><svg:path fill="currentColor" d="M28 18c0-5.523 4.477-10 10-10h4v14H28zM6 28h14v4c0 5.523-4.477 10-10 10H6z"></svg:path></svg:g>`,
})
export class IconParkSolidCycleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
