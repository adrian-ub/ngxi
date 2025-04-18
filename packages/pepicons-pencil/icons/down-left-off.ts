import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilDownLeftOffIcon],svg[pepicons-pencil-down-left-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.354 16.354a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L3.707 12l3.647 3.646a.5.5 0 0 1 0 .708" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.75 11.5c.728 0 1.427-.291 1.943-.81s.807-1.226.807-1.963V3a.5.5 0 0 1 1 0v5.727c0 1-.394 1.959-1.097 2.667A3.74 3.74 0 0 1 12.75 12.5H3a.5.5 0 0 1 0-1z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilDownLeftOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
