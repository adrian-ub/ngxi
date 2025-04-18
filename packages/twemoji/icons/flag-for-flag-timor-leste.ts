import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagTimorLesteIcon],svg[twemoji-flag-for-flag-timor-leste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DC241F" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"></svg:path><svg:path fill="#FFC726" d="M16 18L1.296 29.947c.079.072.16.141.244.207L23.667 18L1.54 5.846a4.037 4.037 0 0 0-.244.207L16 18z"></svg:path><svg:path fill="#141414" d="M1.296 6.053l-.002.001A3.99 3.99 0 0 0 0 9v18c0 1.166.499 2.216 1.296 2.947L16 18L1.296 6.053z"></svg:path><svg:path fill="#FFF" d="M4.761 19.01l.492 3.269l1.523-2.934l3.262.542l-2.32-2.355l1.523-2.934l-2.957 1.478l-2.32-2.355l.493 3.269L1.5 18.468z"></svg:path>`,
})
export class TwemojiFlagForFlagTimorLesteIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
