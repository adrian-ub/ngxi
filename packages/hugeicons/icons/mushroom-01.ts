import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMushroom01Icon],svg[hugeicons-mushroom-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 15c2.412-.392 4-1.059 4-1.816C21 11.978 16.97 11 12 11s-9 .978-9 2.184C3 13.94 4.588 14.608 7 15"></svg:path><svg:path d="M21 13c0-6.075-4.03-11-9-11S3 6.925 3 13"></svg:path><svg:path d="M18 4.765C17.535 5.504 16.671 6 15.682 6C14.201 6 13 4.886 13 3.512c0-.569.206-1.093.552-1.512M10 11.5c-.005 3.45-.1 8.675-2 10.5m6-10.5c.005 3.45.1 8.675 2 10.5M9.008 7h-.01"></svg:path></svg:g>`,
})
export class HugeiconsMushroom01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
