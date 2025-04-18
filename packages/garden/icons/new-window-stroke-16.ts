import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenNewWindowStroke16Icon],svg[garden-new-window-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 10.5V14c0 .3-.2.5-.5.5H2c-.3 0-.5-.2-.5-.5V2c0-.3.2-.5.5-.5h3.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m8 8l6.5-6.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 1.5h6v6"></svg:path>`,
})
export class GardenNewWindowStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
