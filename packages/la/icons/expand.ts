import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laExpandIcon],svg[la-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v9h2V6h7V4zm15 0v2h7v7h2V4zM4 19v9h9v-2H6v-7zm22 0v7h-7v2h9v-9z"></svg:path>`,
})
export class LaExpandIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
