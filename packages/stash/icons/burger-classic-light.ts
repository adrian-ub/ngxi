import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashBurgerClassicLightIcon],svg[stash-burger-classic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 6a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m0 6a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m.5 5.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class StashBurgerClassicLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
