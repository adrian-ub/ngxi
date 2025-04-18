import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashBurgerArrowRightLightIcon],svg[stash-burger-arrow-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5.5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zm1 6a.5.5 0 0 0 0 1h15.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708l1.647 1.646zM3.5 18a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class StashBurgerArrowRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
