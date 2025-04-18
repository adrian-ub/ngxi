import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCheckBoxDoubleFill12Icon],svg[garden-check-box-double-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 0H1C.45 0 0 .45 0 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1M7.94 3.94l-3.5 3.5c-.12.12-.28.18-.44.18s-.32-.06-.44-.18l-1.5-1.5c-.24-.24-.24-.64 0-.88s.64-.24.88 0L4 6.12l3.06-3.06c.24-.24.64-.24.88 0c.25.24.25.64 0 .88"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M2.5 11.5H11c.28 0 .5-.22.5-.5V2.5"></svg:path>`,
})
export class GardenCheckBoxDoubleFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
