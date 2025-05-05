import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRostrumIcon],svg[picon-rostrum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8L1 2l1-2h1L2 2h5L6 0h1l1 2l-1 6M4 2V0h1v2"></svg:path>`,
})
export class PiconRostrumIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
