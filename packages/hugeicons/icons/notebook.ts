import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNotebookIcon],svg[hugeicons-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 14.5h4m-4-5h8M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2h1.5c3.771 0 5.657 0 6.828 1.172S21.5 6.229 21.5 10v4c0 3.771 0 5.657-1.172 6.828S17.271 22 13.5 22H12c-3.771 0-5.657 0-6.828-1.172S4 17.771 4 14zm1-4H2.5M5 12H2.5M5 18H2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsNotebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
