import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserTime03Icon],svg[hugeicons-user-time-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M14 6a4 4 0 1 1-8 0a4 4 0 0 1 8 0m4.5 13l-1.5-.6V16m-4 2a4 4 0 1 0 8 0a4 4 0 0 0-8 0m-2.5 2H5a2 2 0 0 1-2-2a5 5 0 0 1 5-5h4.5" color="currentColor"></svg:path>`,
})
export class HugeiconsUserTime03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
