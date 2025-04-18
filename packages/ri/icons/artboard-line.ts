import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArtboardLineIcon],svg[ri-artboard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.586 17H3v-2h18v2h-5.586l3.243 3.243l-1.414 1.414L13 17.414V20h-2v-2.586l-4.243 4.243l-1.414-1.414zM5 3h14a1 1 0 0 1 1 1v10H4V4a1 1 0 0 1 1-1m1 2v7h12V5z"></svg:path>`,
})
export class RiArtboardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
