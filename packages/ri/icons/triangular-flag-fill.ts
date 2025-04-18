import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTriangularFlagFillIcon],svg[ri-triangular-flag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.66 2.181C5.016 1.613 4 2.071 4 2.932V22h2v-4h14.99c.922 0 1.352-1.142.66-1.75z"></svg:path>`,
})
export class RiTriangularFlagFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
