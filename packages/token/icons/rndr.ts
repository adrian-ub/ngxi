import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenRndrIcon],svg[token-rndr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.563a8.437 8.437 0 1 1-6.806 3.453a1.682 1.682 0 0 0 2.869-1.204a1.687 1.687 0 1 0-3.212.72A9 9 0 1 0 12.001 3zM6.375 6.938a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25m5.625 9a3.937 3.937 0 1 0 0-7.875a3.937 3.937 0 0 0 0 7.874" clip-rule="evenodd"></svg:path>`,
})
export class TokenRndrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
