import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSandboxFill12Icon],svg[garden-sandbox-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 1l-.117.007A1 1 0 0 0 1 2v1.931l-.992 6.945A1 1 0 0 0 1 12h3a1 1 0 0 0 1-1V9l.005-.113C5.04 8.405 5.475 8 6 8l.113.005C6.595 8.04 7 8.475 7 9v2a1 1 0 0 0 1 1h3l.118-.007a1 1 0 0 0 .874-1.117L11 3.939V2a1 1 0 0 0-1-1H9l-.117.007A1 1 0 0 0 8 2v1h-.5V2a1 1 0 0 0-1-1h-1l-.117.007A1 1 0 0 0 4.5 2v1H4V2a1 1 0 0 0-1-1z"></svg:path>`,
})
export class GardenSandboxFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
