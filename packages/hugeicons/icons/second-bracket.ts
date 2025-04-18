import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecondBracketIcon],svg[hugeicons-second-bracket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.225 3c1.39.154 2.325.501 3.023 1.287C21.5 5.697 21.5 7.964 21.5 12.5s0 6.804-1.252 8.213c-.698.786-1.634 1.133-3.023 1.287m-10.45 0c-1.39-.154-2.325-.501-3.023-1.287C2.5 19.303 2.5 17.036 2.5 12.5s0-6.804 1.252-8.213C4.45 3.501 5.386 3.154 6.775 3" color="currentColor"></svg:path>`,
})
export class HugeiconsSecondBracketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
