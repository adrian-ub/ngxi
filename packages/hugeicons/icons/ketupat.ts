import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKetupatIcon],svg[hugeicons-ketupat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17.775 9.649l-1.926-1.926C14.034 5.908 13.126 5 11.998 5s-2.036.908-3.851 2.723L6.22 9.65c-1.815 1.815-2.723 2.723-2.723 3.851s.908 2.036 2.723 3.851l1.926 1.926C9.962 21.092 10.87 22 11.998 22s2.036-.908 3.851-2.723l1.926-1.926c1.815-1.815 2.723-2.723 2.723-3.851s-.908-2.036-2.723-3.851m-1.027-.899l-4.75 4.75m0 0l-4.75 4.75m4.75-4.75l-4.75-4.75m4.75 4.75l4.75 4.75M15 2c-2.4.24-3 2.3-3 3c-.167-.6-1-1.8-3-1.8" color="currentColor"></svg:path>`,
})
export class HugeiconsKetupatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
