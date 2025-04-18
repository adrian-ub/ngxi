import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiToggleRightSolidIcon],svg[mynaui-toggle-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6.25a5.75 5.75 0 1 0 0 11.5h8a5.75 5.75 0 0 0 0-11.5zM12.75 12a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path>`,
})
export class MynauiToggleRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
