import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWashTumbleOffIcon],svg[tabler-wash-tumble-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.116 20.127A3 3 0 0 1 18 21H6a3 3 0 0 1-3-3V6c0-.827.335-1.576.877-2.12M7 3h11a3 3 0 0 1 3 3v11"></svg:path><svg:path d="M17.744 13.74a6 6 0 0 0-7.486-7.482M7.759 7.755a6 6 0 1 0 8.48 8.49M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerWashTumbleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
