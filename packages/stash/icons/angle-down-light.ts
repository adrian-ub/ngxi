import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashAngleDownLightIcon],svg[stash-angle-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.176 10.376a.6.6 0 0 1 .848 0L12 12.352l1.976-1.976a.6.6 0 0 1 .848.848l-2.4 2.4a.6.6 0 0 1-.848 0l-2.4-2.4a.6.6 0 0 1 0-.848"></svg:path>`,
})
export class StashAngleDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
