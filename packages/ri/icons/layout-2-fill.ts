import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayout2FillIcon],svg[ri-layout-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3v18H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm10 10v7a1 1 0 0 1-1 1h-7v-8zM20 3a1 1 0 0 1 1 1v7h-8V3z"></svg:path>`,
})
export class RiLayout2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
