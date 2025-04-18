import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciInfoSquareIcon],svg[ci-info-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1ZM10 11v2h1v4h3v-2h-1v-4h-3Zm1-4v2h2V7h-2Z"></svg:path>`,
})
export class CiInfoSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
