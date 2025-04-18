import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDirectionsIcon],svg[grommet-icons-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m17 11l5-5l-5-5m5 5h-4a6 6 0 0 0-6 6v12M7 6l-5 5l5 5m-5-5h4a6 6 0 0 1 6 6v7"></svg:path>`,
})
export class GrommetIconsDirectionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
