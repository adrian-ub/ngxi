import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagFinlandIcon],svg[twemoji-flag-finland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EDECEC" d="M32 5H18v10h18V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#EEE" d="M11 5H4a4 4 0 0 0-4 4v6h11z"></svg:path><svg:path fill="#EDECEC" d="M32 31H18V21h18v6a4 4 0 0 1-4 4m-21 0H4a4 4 0 0 1-4-4v-6h11z"></svg:path><svg:path fill="#003580" d="M18 5h-7v10H0v6h11v10h7V21h18v-6H18z"></svg:path>`,
})
export class TwemojiFlagFinlandIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
