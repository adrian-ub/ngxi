import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsPersonalComputerIcon],svg[grommet-icons-personal-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M3 18h18V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm-1 2h20c1 0 1-1 1-1H1s0 1 1 1Z"></svg:path>`,
})
export class GrommetIconsPersonalComputerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
