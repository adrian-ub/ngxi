import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsUpArrowSquareIcon],svg[bxs-up-arrow-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2m7-14l5 5h-4v5h-2v-5H7z"></svg:path>`,
})
export class BxsUpArrowSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
