import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginVirtualBlackboadOutlineIcon],svg[bubbles-plugin-virtual-blackboad-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 17.75v6m0-6l-6 6m6-6l6 6M2 1.25h21v16.5H2zm0 4.5h21"></svg:path>`,
})
export class BubblesPluginVirtualBlackboadOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
