import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDockLeftIcon],svg[gg-dock-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 4h20v16H2zm6 2h12v12H8z" clip-rule="evenodd"></svg:path>`,
})
export class GgDockLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
