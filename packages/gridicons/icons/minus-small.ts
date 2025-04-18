import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsMinusSmallIcon],svg[gridicons-minus-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11h12v2H6z"></svg:path>`,
})
export class GridiconsMinusSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
