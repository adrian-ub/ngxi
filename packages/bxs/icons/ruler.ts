import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsRulerIcon],svg[bxs-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.875 7H3.125C1.953 7 1 7.897 1 9v6c0 1.103.953 2 2.125 2h17.75C22.047 17 23 16.103 23 15V9c0-1.103-.953-2-2.125-2M7 12H5V9h2zm4 1H9V9h2zm4-1h-2V9h2zm4 1h-2V9h2z"></svg:path>`,
})
export class BxsRulerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
