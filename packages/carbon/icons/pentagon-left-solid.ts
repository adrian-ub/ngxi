import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPentagonLeftSolidIcon],svg[carbon-pentagon-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16a1 1 0 0 0 .194.592l9.544 13a1 1 0 0 0 1.112.36l15.456-4.97A1 1 0 0 0 29 24.03V7.97a1 1 0 0 0-.694-.952L12.85 2.048a1 1 0 0 0-1.112.36l-9.544 13A1 1 0 0 0 2 16"></svg:path>`,
})
export class CarbonPentagonLeftSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
