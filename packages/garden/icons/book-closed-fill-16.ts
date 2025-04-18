import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBookClosedFill16Icon],svg[garden-book-closed-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 1.5s0-1 1-1H12s.5 0 .5.5v1.5"></svg:path><svg:path fill="currentColor" d="M13 2H3.5c-.4 0-.5-.3-.5-.5H2v13c0 1.1.9 1.5 1.5 1.5H13c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1m-2.5 8h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5m0-3h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5"></svg:path>`,
})
export class GardenBookClosedFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
