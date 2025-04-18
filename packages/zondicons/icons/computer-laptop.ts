import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsComputerLaptopIcon],svg[zondicons-computer-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16h2v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-1h2V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2zM4 4v9h12V4zm4 11v1h4v-1z"></svg:path>`,
})
export class ZondiconsComputerLaptopIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
