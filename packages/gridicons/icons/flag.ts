import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsFlagIcon],svg[gridicons-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6a2 2 0 0 0-2-2H5v17h2v-7h5a2 2 0 0 0 2 2h6V6z"></svg:path>`,
})
export class GridiconsFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
