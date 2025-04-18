import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCornerUpLeftIcon],svg[gg-corner-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.628 14.722l-1.412 1.417L2.84 9.79l6.35-6.378l1.417 1.411L6.83 8.615l10.305-.022a4 4 0 0 1 4.009 3.991l.017 8l-2 .005l-.017-8a2 2 0 0 0-2.004-1.996l-10.636.023z"></svg:path>`,
})
export class GgCornerUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
