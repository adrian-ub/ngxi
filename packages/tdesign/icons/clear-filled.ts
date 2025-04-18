import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignClearFilledIcon],svg[tdesign-clear-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1h6v8.5h6V14H3V9.5h6zM3 16h18v7h-5v-3h-2v3H3z"></svg:path>`,
})
export class TdesignClearFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
