import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimWindowGridIcon],svg[uim-window-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11H10V2H8v20h2v-9h12z" opacity=".25"></svg:path><svg:path fill="currentColor" d="M3 2h5v20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"></svg:path><svg:path fill="currentColor" d="M10 2h11a1 1 0 0 1 1 1v8H10zm0 11h12v8a1 1 0 0 1-1 1H10z" opacity=".5"></svg:path>`,
})
export class UimWindowGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
