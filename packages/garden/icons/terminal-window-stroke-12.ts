import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenTerminalWindowStroke12Icon],svg[garden-terminal-window-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zM5.5 10a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1zM2.146 4.854a.5.5 0 1 1 .708-.708l2.148 2.149a1 1 0 0 1 0 1.42l-2.15 2.14a.5.5 0 1 1-.705-.71l2.15-2.14l-2.15-2.151zM11 3H1v8h10zm0-2H1v1h10z"></svg:path>`,
})
export class GardenTerminalWindowStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
