import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDockBottomIcon],svg[gg-dock-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 20V4h20v16zM4 6h16v8H4z" clip-rule="evenodd"></svg:path>`,
})
export class GgDockBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
