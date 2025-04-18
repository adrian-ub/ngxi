import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSquareCircleIcon],svg[mdi-square-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4v16H4V4zm2-2H2v20h20zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6"></svg:path>`,
})
export class MdiSquareCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
