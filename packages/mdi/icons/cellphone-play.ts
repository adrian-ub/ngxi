import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCellphonePlayIcon],svg[mdi-cellphone-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19H7V5h10m0-4H7c-1.11 0-2 .89-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3a2 2 0 0 0-2-2m-7 8v6l4-3z"></svg:path>`,
})
export class MdiCellphonePlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
