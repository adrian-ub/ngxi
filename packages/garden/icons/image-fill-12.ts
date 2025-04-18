import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenImageFill12Icon],svg[garden-image-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1M8 3c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m2.94 6.94c-.12.12-.28.18-.44.18s-.32-.06-.44-.18L8.5 8.38l-.7.71c-.44.44-1.15.44-1.59 0L4.5 7.38L1.94 9.94c-.24.24-.64.24-.88 0s-.24-.64 0-.88L3.7 6.41c.44-.44 1.15-.44 1.59 0L7 8.12l.7-.71c.44-.44 1.15-.44 1.59 0l1.65 1.65c.25.24.25.64 0 .88"></svg:path>`,
})
export class GardenImageFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
