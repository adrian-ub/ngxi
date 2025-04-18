import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowFourFocusCenterBottom20FilledIcon],svg[fluent-layout-row-four-focus-center-bottom-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3zm2-3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1h12zm0-4H4V7.5h12zM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v.5H4z"></svg:path>`,
})
export class FluentLayoutRowFourFocusCenterBottom20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
