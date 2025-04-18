import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStairsLineIcon],svg[ri-stairs-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h6v18H3v-6h4v-4h4V7h4zm2 2v4h-4v4H9v4H5v2h14V5z"></svg:path>`,
})
export class RiStairsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
