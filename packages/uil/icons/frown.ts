import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilFrownIcon],svg[uil-frown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.36 15.33a1 1 0 0 0-.13 1.4a1 1 0 0 0 1.41.13a3.76 3.76 0 0 1 4.72 0a1 1 0 0 0 1.41-.13a1 1 0 0 0-.13-1.4a5.81 5.81 0 0 0-7.28 0M9 11a1 1 0 1 0-1-1a1 1 0 0 0 1 1m3-9a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m3-11a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilFrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
