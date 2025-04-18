import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesLayoutModuleOutlineIcon],svg[bubbles-layout-module-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M.75.747h9v9h-9zm0 13.5h9v9h-9zm13.5-13.5h9v9h-9zm0 13.5h9v9h-9z"></svg:path>`,
})
export class BubblesLayoutModuleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
