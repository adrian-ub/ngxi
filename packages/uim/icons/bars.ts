import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimBarsIcon],svg[uim-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m0 5H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m0-10H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2"></svg:path>`,
})
export class UimBarsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
