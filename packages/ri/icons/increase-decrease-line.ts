import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riIncreaseDecreaseLineIcon],svg[ri-increase-decrease-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m1 2v14h16v-14zm5 6h2v2h-2v2h-2v-2h-2v-2h2v-2h2zm4 0h6v2h-6z"></svg:path>`,
})
export class RiIncreaseDecreaseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
