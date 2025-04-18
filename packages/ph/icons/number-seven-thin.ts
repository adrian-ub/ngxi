import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberSevenThinIcon],svg[ph-number-seven-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m171.83 49.15l-48 160A4 4 0 0 1 120 212a3.8 3.8 0 0 1-1.15-.17a4 4 0 0 1-2.68-5L162.62 52H88a4 4 0 0 1 0-8h80a4 4 0 0 1 3.83 5.15"></svg:path>`,
})
export class PhNumberSevenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
