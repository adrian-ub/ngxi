import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHorizontalIcon],svg[tdesign-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v6H2zm2 2v2h16V4zm-2 6h20v12H2zm2 2v8h16v-8z"></svg:path>`,
})
export class TdesignHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
