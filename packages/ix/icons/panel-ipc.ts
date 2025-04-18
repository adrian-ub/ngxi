import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPanelIpcIcon],svg[ix-panel-ipc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 106.667v298.666H42.666V106.667zm-42.666 64H85.333v192h341.334zM149.333 128h-64v21.333h64z"></svg:path>`,
})
export class IxPanelIpcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
