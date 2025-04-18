import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashBurgerArrowLeftDuotoneIcon],svg[stash-burger-arrow-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm0 12a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.03 8.97a.75.75 0 0 1 0 1.06l-1.22 1.22H19a.75.75 0 0 1 0 1.5H3.81l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class StashBurgerArrowLeftDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
