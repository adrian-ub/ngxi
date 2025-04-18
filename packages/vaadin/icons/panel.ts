import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPanelIcon],svg[vaadin-panel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm13 15H1V3h12zm2 0h-1v-1h1zm0-2h-1V5h1zm0-9h-1V3h1z"></svg:path>`,
})
export class VaadinPanelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
