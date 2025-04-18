import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSquareCircleOutlineIcon],svg[mdi-square-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12c0-3.31-2.69-6-6-6s-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6m-6-4a3.999 3.999 0 1 1 .002 8.002A3.999 3.999 0 0 1 12 8m8-4H4v16h16zm2-2v20H2V2z"></svg:path>`,
})
export class MdiSquareCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
