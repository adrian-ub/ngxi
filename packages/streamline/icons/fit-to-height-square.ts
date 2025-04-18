import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFitToHeightSquareIcon],svg[streamline-fit-to-height-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 13.5h-7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3m-3.5-3v-7"></svg:path><svg:path d="m9 5.5l-2-2l-2 2m0 3l2 2l2-2"></svg:path></svg:g>`,
})
export class StreamlineFitToHeightSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
