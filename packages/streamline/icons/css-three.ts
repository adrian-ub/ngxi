import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCssThreeIcon],svg[streamline-css-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m12 10l-5 3.5L2 10L.5.5h13z"></svg:path><svg:path d="M4.5 3.5h5L5.5 6H9v2.5L7 10L5 8.5"></svg:path></svg:g>`,
})
export class StreamlineCssThreeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
