import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSquareFullIcon],svg[la-square-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6v20h20V6z"></svg:path>`,
})
export class LaSquareFullIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
