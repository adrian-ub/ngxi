import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiAccessibilityIcon],svg[mynaui-accessibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0M8 9.5l4 .778m0 0l4-.778m-4 .778v2.333m0 0L10.4 16.5m1.6-3.889l1.6 3.889M12 7.25v.5"></svg:path>`,
})
export class MynauiAccessibilityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
