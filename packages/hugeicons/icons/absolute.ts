import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAbsoluteIcon],svg[hugeicons-absolute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.725 2.5c1.39.154 2.325.501 3.023 1.287C22 5.197 22 7.464 22 12s0 6.804-1.252 8.213c-.698.786-1.634 1.133-3.023 1.287m-11.45 0c-1.39-.154-2.325-.501-3.023-1.287C2 18.803 2 16.536 2 12s0-6.804 1.252-8.213C3.95 3.001 4.886 2.654 6.275 2.5M7.56 8.01c1.53-.06 2.49.03 3.09 1.08c.63 1.26 2.19 4.77 2.58 5.58c.42.87.96 1.47 3.18 1.32"></svg:path><svg:path d="M17 8c-2.2-.014-4 2.7-5 4c-1.1 1.5-2.99 4.1-4.99 4"></svg:path></svg:g>`,
})
export class HugeiconsAbsoluteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
