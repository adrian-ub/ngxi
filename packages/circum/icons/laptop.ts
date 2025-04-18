import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumLaptopIcon],svg[circum-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.485 16.155a1 1 0 0 0-.77-.36h-.33v-9.23a2.5 2.5 0 0 0-2.5-2.5H6.115a2.5 2.5 0 0 0-2.5 2.5V15.8h-.34a1 1 0 0 0-.98 1.17l.3 1.73a1.5 1.5 0 0 0 1.48 1.24h15.85a1.5 1.5 0 0 0 1.48-1.24l.3-1.73a.99.99 0 0 0-.22-.815m-16.87-9.59a1.5 1.5 0 0 1 1.5-1.5h11.77a1.5 1.5 0 0 1 1.5 1.5V15.8H4.615Zm15.8 11.96a.494.494 0 0 1-.49.41H4.075a.494.494 0 0 1-.49-.41l-.31-1.73h17.44Z"></svg:path>`,
})
export class CircumLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
