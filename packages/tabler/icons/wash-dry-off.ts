import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWashDryOffIcon],svg[tabler-wash-dry-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.116 20.127A3 3 0 0 1 18 21H6a3 3 0 0 1-3-3V6c0-.827.335-1.576.877-2.12M7 3h11a3 3 0 0 1 3 3v11M3 3l18 18"></svg:path>`,
})
export class TablerWashDryOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
