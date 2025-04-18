import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciInfoSquareOutlineIcon],svg[ci-info-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1ZM5 5v14h14V5H5Zm9 12h-3v-4h-1v-2h3v4h1v2Zm-1-8h-2V7h2v2Z"></svg:path>`,
})
export class CiInfoSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
