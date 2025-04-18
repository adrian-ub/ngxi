import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siBallotFillIcon],svg[si-ballot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M8 7a2 2 0 1 0 0 4a2 2 0 0 0 0-4m5 1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0 6a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm-7 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0" clip-rule="evenodd"></svg:path>`,
})
export class SiBallotFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
