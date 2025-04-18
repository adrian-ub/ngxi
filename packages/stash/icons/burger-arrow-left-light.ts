import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashBurgerArrowLeftLightIcon],svg[stash-burger-arrow-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5.5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zm-4.793 7l1.647 1.646a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 1 1 .708.708L3.207 11.5H19a.5.5 0 0 1 0 1zM7.5 18a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class StashBurgerArrowLeftLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
