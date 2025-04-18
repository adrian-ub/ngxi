import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRidingFillIcon],svg[ri-riding-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 21a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0-3a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m13 3a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0-3a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-6.969-8.203L13 12v6h-2v-5l-2.719-2.266A2 2 0 0 1 8 7.671l2.828-2.828a2 2 0 0 1 2.829 0l1.414 1.414a6.97 6.97 0 0 0 3.917 1.975l-.01 2.015a8.96 8.96 0 0 1-5.321-2.575zM16 5a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiRidingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
