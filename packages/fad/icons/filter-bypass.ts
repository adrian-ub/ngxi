import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadFilterBypassIcon],svg[fad-filter-bypass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M25 67.995A4 4 0 0 1 29.004 64H227a4 4 0 0 1 4 3.995v10.01A3.99 3.99 0 0 1 227 82H29a4 4 0 0 1-4-3.995z"></svg:path>`,
})
export class FadFilterBypassIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
