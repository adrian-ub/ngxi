import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCurlyBracesIcon],svg[majesticons-curly-braces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 5H9a2 2 0 0 0-2 2v2c0 1-.6 3-3 3c1 0 3 .6 3 3v2a2 2 0 0 0 2 2h.5m5-14h.5a2 2 0 0 1 2 2v2c0 1 .6 3 3 3c-1 0-3 .6-3 3v2a2 2 0 0 1-2 2h-.5"></svg:path>`,
})
export class MajesticonsCurlyBracesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
