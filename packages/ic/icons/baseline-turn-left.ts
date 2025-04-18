import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineTurnLeftIcon],svg[ic-baseline-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.83 11l1.59 1.59L7 14l-4-4l4-4l1.41 1.41L6.83 9H15c1.1 0 2 .9 2 2v9h-2v-9z"></svg:path>`,
})
export class IcBaselineTurnLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
