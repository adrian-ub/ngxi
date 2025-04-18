import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyDesktopIscreenIcon],svg[arcticons-my-desktop-iscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.806 7.614v8.615l7.982-.183V7.064zm0 12.343l19.115-.276v21.662L7.806 40.18zM31.05 6.156v9.279h9.144V5.75zm0 13.373v22.21l9.144.511V19.529z"></svg:path>`,
})
export class ArcticonsMyDesktopIscreenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
