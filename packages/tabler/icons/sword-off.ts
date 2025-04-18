import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSwordOffIcon],svg[tabler-sword-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.938 7.937L15 4h5v5l-3.928 3.055m-2.259 1.757L11 16l-4 4l-3-3l4-4l2.19-2.815M6.5 11.5l6 6M3 3l18 18"></svg:path>`,
})
export class TablerSwordOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
