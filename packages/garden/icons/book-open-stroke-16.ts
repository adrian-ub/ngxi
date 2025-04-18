import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBookOpenStroke16Icon],svg[garden-book-open-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M8.2 2.7c.8-.4 3.6-1.6 6.9-1c.2 0 .4.3.4.5v11.7c0 .3-.3.5-.6.5c-3.2-.6-5.9.6-6.7 1c-.1.1-.3.1-.4 0c-.8-.4-3.5-1.6-6.7-1c-.3.1-.6-.2-.6-.5V2.2c0-.2.2-.4.4-.5c3.2-.7 6.1.6 6.9 1zM3 4.5c1.2 0 2.2.2 3.1.5M3 7.5c1.2 0 2.2.2 3.1.5M3 10.5c1.2 0 2.2.2 3.1.5m7-6.5c-1.2 0-2.2.2-3.1.5m3.1 2.5c-1.2 0-2.2.2-3.1.5m3.1 2.5c-1.2 0-2.2.2-3.1.5"></svg:path>`,
})
export class GardenBookOpenStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
