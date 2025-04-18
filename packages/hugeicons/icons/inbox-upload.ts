import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInboxUploadIcon],svg[hugeicons-inbox-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.5 2.5c-1.142.188-1.966.538-2.609 1.188C2.5 5.095 2.5 7.36 2.5 11.89s0 6.795 1.391 8.203S7.521 21.5 12 21.5c4.478 0 6.718 0 8.109-1.407S21.5 16.42 21.5 11.89s0-6.796-1.391-8.203c-.643-.65-1.467-1-2.609-1.188"></svg:path><svg:path d="M9.5 5c.492-.506 1.8-2.5 2.5-2.5M14.5 5c-.492-.506-1.8-2.5-2.5-2.5m0 0v8m9.5 3h-4.926c-.842 0-1.503.704-1.875 1.447c-.403.808-1.21 1.553-2.699 1.553s-2.296-.745-2.7-1.553c-.37-.743-1.032-1.447-1.874-1.447H2.5"></svg:path></svg:g>`,
})
export class HugeiconsInboxUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
