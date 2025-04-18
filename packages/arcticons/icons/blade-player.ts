import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBladePlayerIcon],svg[arcticons-blade-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.958 17.269a10.21 10.21 0 0 0-12.831-2.937v-3.206L5.5 5.5v17.96a10.27 10.27 0 0 0 16.474 8.177"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.004 23.462l-3.312 1.91l-3.311 1.91V19.64l3.311 1.91Zm1.958 13.506V23.46a10.332 10.332 0 1 1 5.627 9.128V42.5Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.466 23.46l-3.311-1.91l-3.312-1.91v7.64l3.312-1.91Z"></svg:path>`,
})
export class ArcticonsBladePlayerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
