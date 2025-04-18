import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAlien01Icon],svg[hugeicons-alien-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.333 10H6.5a.5.5 0 0 0-.5.5v.833A2.667 2.667 0 0 0 8.667 14H9.5a.5.5 0 0 0 .5-.5v-.833A2.667 2.667 0 0 0 7.333 10m9.334 0H17c.471 0 .707 0 .854.146c.146.147.146.383.146.854v.333A2.667 2.667 0 0 1 15.333 14H15c-.471 0-.707 0-.854-.146C14 13.707 14 13.47 14 13v-.333A2.667 2.667 0 0 1 16.667 10M11 18h2"></svg:path><svg:path d="M21 11c0 5.523-6 11-9 11s-9-5.477-9-11s4.03-9 9-9s9 3.477 9 9"></svg:path></svg:g>`,
})
export class HugeiconsAlien01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
