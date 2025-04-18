import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowUndoIcon],svg[proicons-arrow-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.97 21.25l8.26-8.26a5.999 5.999 0 0 0-8.483-8.483L5.013 9.24l-.622.622m7.199.505H5.513c-.447 0-.848-.195-1.122-.505M4.013 2.79v6.077c0 .382.143.73.378.995"></svg:path>`,
})
export class ProiconsArrowUndoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
