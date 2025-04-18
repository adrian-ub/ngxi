import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenNewWindowFill16Icon],svg[garden-new-window-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.25" d="M14.5 10.5V14c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V2c0-.28.22-.5.5-.5h3.5M8 8l4-4"></svg:path><svg:path fill="currentColor" d="M15 7.29V2c0-.55-.45-1-1-1H8.71a.5.5 0 0 0-.36.85l5.79 5.79c.32.32.86.1.86-.35"></svg:path>`,
})
export class GardenNewWindowFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
