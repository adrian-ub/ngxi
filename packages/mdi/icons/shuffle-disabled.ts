import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShuffleDisabledIcon],svg[mdi-shuffle-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4.5V7H5v2h11v2.5L19.5 8M16 12.5V15H5v2h11v2.5l3.5-3.5"></svg:path>`,
})
export class MdiShuffleDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
