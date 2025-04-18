import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laTerminalIcon],svg[la-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v22h24V5zm2 2h20v2H6zm0 4h20v14H6zm5.219 2.781L9.78 15.22L12.562 18l-2.78 2.781l1.437 1.438l3.5-3.5l.687-.719l-.687-.719zM16 20v2h6v-2z"></svg:path>`,
})
export class LaTerminalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
