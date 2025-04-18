import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLockClosedOffIcon],svg[pepicons-pencil-lock-closed-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.5 12.5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12 7.5H7A3.5 3.5 0 0 0 3.5 11v3A3.5 3.5 0 0 0 7 17.5h5a3.5 3.5 0 0 0 3.5-3.5v-3A3.5 3.5 0 0 0 12 7.5M4.5 11A2.5 2.5 0 0 1 7 8.5h5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 14z" clip-rule="evenodd"></svg:path><svg:path d="M7 8a.5.5 0 0 1-1 0V4.5a3.5 3.5 0 1 1 7 0V8a.5.5 0 0 1-1 0V4.5a2.5 2.5 0 0 0-5 0z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilLockClosedOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
