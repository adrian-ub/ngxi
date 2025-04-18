import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciGridRoundIcon],svg[ci-grid-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm12-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm12-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4ZM6 8a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"></svg:path>`,
})
export class CiGridRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
