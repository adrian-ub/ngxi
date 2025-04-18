import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSquareIcon],svg[la-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6v20h20V6zm2 2h16v16H8z"></svg:path>`,
})
export class LaSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
