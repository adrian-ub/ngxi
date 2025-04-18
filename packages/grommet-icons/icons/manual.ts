import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsManualIcon],svg[grommet-icons-manual-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M14 9v8zm-4 0v8zM8 5a4 4 0 1 0 8 0a4 4 0 0 0-8 0ZM4 23h16v-3H4zm3-3h10v-3H7z"></svg:path>`,
})
export class GrommetIconsManualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
