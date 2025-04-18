import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPinnedIcon],svg[tabler-pinned-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 4v6l-2 4v2h10v-2l-2-4V4m-3 12v5M8 4h8"></svg:path>`,
})
export class TablerPinnedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
