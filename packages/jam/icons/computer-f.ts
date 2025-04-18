import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamComputerFIcon],svg[jam-computer-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 .565h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1m0 11v2h2v-2zm9-8h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m2 11h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamComputerFIcon {
  readonly viewBox = input("-2 -3.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
