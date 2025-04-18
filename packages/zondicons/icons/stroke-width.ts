import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsStrokeWidthIcon],svg[zondicons-stroke-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h20v5H0zm0 7h20v4H0zm0 6h20v3H0zm0 5h20v2H0z"></svg:path>`,
})
export class ZondiconsStrokeWidthIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
