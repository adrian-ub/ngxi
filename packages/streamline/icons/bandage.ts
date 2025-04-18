import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBandageIcon],svg[streamline-bandage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.13 7.87l4.74-4.74m-1.74 7.74l4.74-4.74m-3.08 6.39a3.345 3.345 0 0 0 4.73-4.73L6.21 1.48a3.345 3.345 0 0 0-4.73 4.73z"></svg:path>`,
})
export class StreamlineBandageIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
