import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenNewWindowFill12Icon],svg[garden-new-window-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M10.5 8.5V10c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V2c0-.28.22-.5.5-.5h1.5M6 6l4-4"></svg:path><svg:path fill="currentColor" d="M10.5 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5a.47.47 0 0 1-.11-.54C5.62 1.12 5.8 1 6 1h4c.55 0 1 .45 1 1v4c0 .2-.12.38-.31.46c-.06.03-.13.04-.19.04"></svg:path>`,
})
export class GardenNewWindowFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
