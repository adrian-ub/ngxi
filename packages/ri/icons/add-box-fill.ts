import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAddBoxFillIcon],svg[ri-add-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m7 8H7v2h4v4h2v-4h4v-2h-4V7h-2z"></svg:path>`,
})
export class RiAddBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
