import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapSquareRoundedIcon],svg[map-square-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M49 41c0 4.4-3.6 8-8 8H9c-4.4 0-8-3.6-8-8V9c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8z"></svg:path>`,
})
export class MapSquareRoundedIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
