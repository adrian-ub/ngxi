import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRamLineIcon],svg[ri-ram-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h18v10h-2v-2h-2v2h-2v-2h-2v2h-2v-2H9v2H7v-2H5v2H3zM2 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm9 4H5v3h6zm2 0h6v3h-6z"></svg:path>`,
})
export class RiRamLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
