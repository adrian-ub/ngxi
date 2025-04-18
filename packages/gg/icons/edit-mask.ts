import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggEditMaskIcon],svg[gg-edit-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-2.97-2.57Q9 19.22 9 19a3 3 0 1 1 5.97.43a8.03 8.03 0 0 0 4.46-4.46q-.21.03-.43.03a3 3 0 1 1 .43-5.97a8.03 8.03 0 0 0-4.46-4.46q.03.21.03.43a3 3 0 1 1-5.97-.43a8.03 8.03 0 0 0-4.46 4.46A3 3 0 0 1 5 9a3 3 0 1 1-.43 5.97a8.03 8.03 0 0 0 4.46 4.46" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgEditMaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
