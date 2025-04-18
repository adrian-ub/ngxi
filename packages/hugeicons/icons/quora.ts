import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuoraIcon],svg[hugeicons-quora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.148 22C20.037 22 21 19.678 21 16.813c-.963 1.037-3.633 3.207-4.815-1.038C14.741 10.588 10.5 11.5 8 14c3.852 0 4.383.897 5.296 3.85c.963 3.112 2.408 4.15 3.852 4.15"></svg:path><svg:path d="M6.515 11a8 8 0 0 1-.015-.5c0-3.314 2.015-6 4.5-6s4.5 2.686 4.5 6c0 .892-.238 1.739-.5 2.5"></svg:path><svg:path d="M13.241 18.662A7.6 7.6 0 0 1 11 19c-4.418 0-8-3.806-8-8.5S6.582 2 11 2s8 3.806 8 8.5a8.9 8.9 0 0 1-.707 3.5"></svg:path></svg:g>`,
})
export class HugeiconsQuoraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
