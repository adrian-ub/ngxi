import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerIdOffIcon],svg[tabler-id-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 4h10a3 3 0 0 1 3 3v10m-1.437 2.561c-.455.279-.99.439-1.563.439H6a3 3 0 0 1-3-3V7c0-1.083.573-2.031 1.433-2.559"></svg:path><svg:path d="M8.175 8.178a2 2 0 1 0 2.646 2.65M15 8h2m-1 4h1M7 16h9M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerIdOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
