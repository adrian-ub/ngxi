import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTongue01Icon],svg[hugeicons-tongue-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8.009 9H8m8 0h-.009M8 14a5 5 0 0 0 4 2a5 5 0 0 0 4-2m-6 2v1.5a2 2 0 1 0 4 0V16"></svg:path></svg:g>`,
})
export class HugeiconsTongue01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
