import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSettingMenuHorizontalSolidIcon],svg[bubbles-setting-menu-horizontal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8a2 2 0 1 0 4 0a2 2 0 0 0-4 0M6 8a2 2 0 1 0 4 0a2 2 0 0 0-4 0M0 8a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path>`,
})
export class BubblesSettingMenuHorizontalSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
