import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenTerminalWindowStroke16Icon],svg[garden-terminal-window-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 0a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm-2.5 12a.5.5 0 1 1 0 1h-5a.5.5 0 1 1 0-1zM3.854 6.146l2.648 2.649a1 1 0 0 1 0 1.42l-2.65 2.64a.5.5 0 0 1-.705-.71l2.65-2.64l-2.65-2.651a.5.5 0 1 1 .707-.708M15 4H1v11h14zm0-3H1v2h14z"></svg:path>`,
})
export class GardenTerminalWindowStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
