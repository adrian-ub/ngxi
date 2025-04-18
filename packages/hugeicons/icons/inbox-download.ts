import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInboxDownloadIcon],svg[hugeicons-inbox-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 2.5c-1.407.165-2.376.515-3.109 1.254C2.5 5.156 2.5 7.412 2.5 11.926c0 4.513 0 6.77 1.391 8.172S7.521 21.5 12 21.5c4.478 0 6.718 0 8.109-1.402s1.391-3.659 1.391-8.172s0-6.77-1.391-8.172C19.376 3.014 18.407 2.665 17 2.5"></svg:path><svg:path d="M9.5 8c.492.506 1.8 2.5 2.5 2.5M14.5 8c-.492.506-1.8 2.5-2.5 2.5m0 0v-8m9.5 11h-4.926c-.842 0-1.503.704-1.875 1.447c-.403.808-1.21 1.553-2.699 1.553s-2.296-.745-2.7-1.553c-.37-.743-1.032-1.447-1.874-1.447H2.5"></svg:path></svg:g>`,
})
export class HugeiconsInboxDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
