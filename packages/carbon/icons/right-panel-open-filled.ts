import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRightPanelOpenFilledIcon],svg[carbon-right-panel-open-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m2 0h16v9H9.83l3.58-3.59L12 10l-6 6l6 6l1.41-1.41L9.83 17H20v9H4z"></svg:path>`,
})
export class CarbonRightPanelOpenFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
