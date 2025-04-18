import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiToggleLeftSolidIcon],svg[mynaui-toggle-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12A5.75 5.75 0 0 1 8 6.25h8a5.75 5.75 0 0 1 0 11.5H8A5.75 5.75 0 0 1 2.25 12m2.5 0a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 0 0-6.5 0"></svg:path>`,
})
export class MynauiToggleLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
