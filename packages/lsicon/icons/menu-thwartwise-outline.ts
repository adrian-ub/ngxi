import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMenuThwartwiseOutlineIcon],svg[lsicon-menu-thwartwise-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 9.5h12m-12-3h12m-12-3h12m-12 9h12"></svg:path>`,
})
export class LsiconMenuThwartwiseOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
