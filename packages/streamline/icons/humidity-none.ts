import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHumidityNoneIcon],svg[streamline-humidity-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5L.5.5m8.64 12.448a4.48 4.48 0 0 1-6.619-3.98a5.5 5.5 0 0 1 .498-1.932m8.001 3.984A4.5 4.5 0 0 0 11.5 9C11.5 6.51 7 .5 7 .5S5.626 2.335 4.397 4.397"></svg:path>`,
})
export class StreamlineHumidityNoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
