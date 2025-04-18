import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBookClosedFill12Icon],svg[garden-book-closed-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2V1c0-.6-.5-1-1-1H2.5C1.4 0 1 .9 1 1.5v9c0 1.1.9 1.5 1.5 1.5H10c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1M7.5 8h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c.3 0 .5.2.5.5s-.2.5-.5.5m0-2h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c.3 0 .5.2.5.5s-.2.5-.5.5M9 2H2.5c-.4 0-.5-.3-.5-.5s.1-.5.5-.5H9z"></svg:path>`,
})
export class GardenBookClosedFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
