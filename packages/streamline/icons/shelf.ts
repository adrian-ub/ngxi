import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShelfIcon],svg[streamline-shelf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M1.5 4h11m-11 3.5h11M7 7.5v6M9.5 10v1m-5-1v1"></svg:path>`,
})
export class StreamlineShelfIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
