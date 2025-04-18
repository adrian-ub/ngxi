import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesUserWarningOutlineIcon],svg[bubbles-user-warning-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17.25 20.25a.375.375 0 1 0 0 .75a.375.375 0 0 0 0-.75m0-2.25v-3"></svg:path><svg:path d="M23.062 20.682a1.773 1.773 0 0 1-1.587 2.568h-8.451a1.775 1.775 0 0 1-1.587-2.568l4.226-8.452a1.774 1.774 0 0 1 3.173 0zM3.375 4.875a4.125 4.125 0 1 0 8.25 0a4.125 4.125 0 0 0-8.25 0m8.835 7.55A6.742 6.742 0 0 0 .75 17.25"></svg:path></svg:g>`,
})
export class BubblesUserWarningOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
