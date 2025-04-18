import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenTerminalCliStroke12Icon],svg[garden-terminal-cli-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m4.5 8a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1zM2.146 3.854a.5.5 0 1 1 .708-.708L4.957 5.25a1 1 0 0 1 .005 1.395l-2.1 2.2a.5.5 0 1 1-.724-.69L4.243 5.95zM1 2v8h10V2z"></svg:path>`,
})
export class GardenTerminalCliStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
