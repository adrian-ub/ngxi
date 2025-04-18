import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGridViewFilledIcon],svg[tdesign-grid-view-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h9v9H2zm11 0h9v9h-9zM2 13h9v9H2zm11 0h9v9h-9z"></svg:path>`,
})
export class TdesignGridViewFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
