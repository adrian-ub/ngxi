import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenStrxIcon],svg[token-strx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.021 9.67L4.128 3l13.314 2.541zM10.443 21L3.53 3.688l8.153 6.724zm8.873-15.247l-6.31 5.188h4.95l-6.618 9.8l9.133-10.859h-4.395z"></svg:path>`,
})
export class TokenStrxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
