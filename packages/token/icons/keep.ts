import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKeepIcon],svg[token-keep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a8.998 8.998 0 0 0 8.315-12.444A9 9 0 1 0 12 21M9 8H8v2h.5v4H8v2h3.5v-2H11v-1.25h.595l1.01 1.25H12.5v2H16v-2h-.63l-1.74-2.01L15.315 10H16V8h-3.5v2h.15l-1.13 1.25H11V10h.5V8h-1v.5H10V8h-.5v.5H9z" clip-rule="evenodd"></svg:path>`,
})
export class TokenKeepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
