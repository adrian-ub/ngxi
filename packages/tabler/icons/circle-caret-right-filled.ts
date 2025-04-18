import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleCaretRightFilledIcon],svg[tabler-circle-caret-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-5.293 4.953A1 1 0 0 0 10 9v6c0 .217.07.433.21.613l.083.094a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414z"></svg:path>`,
})
export class TablerCircleCaretRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
