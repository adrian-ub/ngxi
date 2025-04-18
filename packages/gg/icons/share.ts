import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggShareIcon],svg[gg-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9a3 3 0 1 0-2.977-2.63l-6.94 3.47a3 3 0 1 0 0 4.319l6.94 3.47a3 3 0 1 0 .895-1.789l-6.94-3.47a3 3 0 0 0 0-.74l6.94-3.47C16.456 8.68 17.19 9 18 9"></svg:path>`,
})
export class GgShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
