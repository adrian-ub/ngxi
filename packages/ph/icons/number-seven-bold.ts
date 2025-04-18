import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberSevenBoldIcon],svg[ph-number-seven-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m179.49 51.45l-48 160A12 12 0 0 1 120 220a11.8 11.8 0 0 1-3.45-.51a12 12 0 0 1-8-14.94L151.87 60H88a12 12 0 0 1 0-24h80a12 12 0 0 1 11.49 15.45"></svg:path>`,
})
export class PhNumberSevenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
