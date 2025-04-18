import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFrameOffIcon],svg[tabler-frame-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h3m4 0h9M4 17h13M7 7v13M17 4v9m0 4v3M3 3l18 18"></svg:path>`,
})
export class TablerFrameOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
