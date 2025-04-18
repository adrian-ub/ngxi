import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDockRightIcon],svg[gg-dock-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 4h20v16H2zm14 14V6H4v12z" clip-rule="evenodd"></svg:path>`,
})
export class GgDockRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
