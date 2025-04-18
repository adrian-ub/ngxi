import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapSquareIcon],svg[map-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h48v48H1z"></svg:path>`,
})
export class MapSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
