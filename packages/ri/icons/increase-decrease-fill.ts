import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riIncreaseDecreaseFillIcon],svg[ri-increase-decrease-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m6 8v-2h-2v2h-2v2h2v2h2v-2h2v-2zm4 0v2h6v-2z"></svg:path>`,
})
export class RiIncreaseDecreaseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
