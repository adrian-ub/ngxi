import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMotorbike01Icon],svg[hugeicons-motorbike-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="19.5" cy="16.5" r="2.5"></svg:circle><svg:path d="M14.416 18A5 5 0 0 1 20 11.1"></svg:path><svg:circle cx="4.5" cy="16.5" r="2.5"></svg:circle><svg:path d="M6.43 9.63h1.727a2 2 0 0 0 1.252-.441l1.828-1.469a1 1 0 0 1 .627-.22H15l-2.716 4.979a1 1 0 0 1-.878.521H9.5M6.43 9.63H4m2.43 0L9.5 13m0 0L7 16"></svg:path><svg:path d="m17 11l-3.008-5.264c-.405-.708-.607-1.062-.909-1.302a2 2 0 0 0-.501-.291C12.224 4 11.816 4 11 4"></svg:path></svg:g>`,
})
export class HugeiconsMotorbike01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
