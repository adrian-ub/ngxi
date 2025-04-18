import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamComputerAltIcon],svg[jam-computer-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 14h18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2M2 0h16a2 2 0 0 1 2 2v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a2 2 0 0 1 2-2m16 11V2H2v9z"></svg:path>`,
})
export class JamComputerAltIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
