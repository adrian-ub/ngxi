import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPhotoPentagonIcon],svg[tabler-photo-pentagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m13.163 2.168l8.021 5.828c.694.504.984 1.397.719 2.212l-3.064 9.43a1.98 1.98 0 0 1-1.881 1.367H7.042a1.98 1.98 0 0 1-1.881-1.367l-3.064-9.43a1.98 1.98 0 0 1 .719-2.212l8.021-5.828a1.98 1.98 0 0 1 2.326 0M15 8h.01"></svg:path><svg:path d="m4 15l4-4c.928-.893 2.072-.893 3 0l5 5"></svg:path><svg:path d="m14 14l1-1c.928-.893 2.072-.893 3 0l2 2"></svg:path></svg:g>`,
})
export class TablerPhotoPentagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
