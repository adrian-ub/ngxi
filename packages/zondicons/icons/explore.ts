import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsExploreIcon],svg[zondicons-explore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20M7.88 7.88l-3.54 7.78l7.78-3.54l3.54-7.78zM10 11a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class ZondiconsExploreIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
