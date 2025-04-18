import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFaviconIcon],svg[catppuccin-favicon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="m3.67 14.57l.83-4.82L1 6.34l4.84-.71L8 1.25l2.16 4.38l4.84.71l-3.5 3.41l.83 4.81L8 12.29z"></svg:path>`,
})
export class CatppuccinFaviconIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
