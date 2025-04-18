import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamComputerIcon],svg[jam-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13v1h3V2H2v9h1v2zM1 0h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1m9 3h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v6h8V5zm2 9h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamComputerIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
