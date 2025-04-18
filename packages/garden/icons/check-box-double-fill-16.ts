import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCheckBoxDoubleFill16Icon],svg[garden-check-box-double-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M4.5 14.5H14c.28 0 .5-.22.5-.5V4.5"></svg:path><svg:path fill="currentColor" d="M12 1H2c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1m-1.06 3.94l-4.5 4.5c-.12.12-.28.18-.44.18s-.32-.06-.44-.18l-2.5-2.5c-.24-.24-.24-.64 0-.88s.64-.24.88 0L6 8.12l4.06-4.06c.24-.24.64-.24.88 0c.25.24.25.64 0 .88"></svg:path>`,
})
export class GardenCheckBoxDoubleFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
