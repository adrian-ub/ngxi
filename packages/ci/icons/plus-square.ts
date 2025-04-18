import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciPlusSquareIcon],svg[ci-plus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2ZM5 5v14h14V5H5Zm8 12h-2v-4H7v-2h4V7h2v4h4v2h-4v4Z"></svg:path>`,
})
export class CiPlusSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
