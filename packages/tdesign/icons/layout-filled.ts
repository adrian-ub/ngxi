import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLayoutFilledIcon],svg[tdesign-layout-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h20v7H2zm0 9h9v11H2zm20 0h-9v11h9z" clip-rule="evenodd"></svg:path>`,
})
export class TdesignLayoutFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
