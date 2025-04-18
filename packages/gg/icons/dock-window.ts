import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDockWindowIcon],svg[gg-dock-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 20V4h20v16zM20 6H6v10h14z" clip-rule="evenodd"></svg:path>`,
})
export class GgDockWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
