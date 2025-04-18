import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMailbox01Icon],svg[hugeicons-mailbox-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.5 9h2m9-1V4a2 2 0 0 1 2-2m-7 16v4"></svg:path><svg:path d="M17.5 5.159C16.535 5 15.26 5 13.375 5h-2.75c-2.918 0-4.377 0-5.482.59A5 5 0 0 0 3.09 7.643c-.59 1.105-.59 2.564-.59 5.482c0 1.751 0 2.627.354 3.29a3 3 0 0 0 1.232 1.23C4.749 18 5.624 18 7.375 18h9.25c1.751 0 2.627 0 3.29-.354a3 3 0 0 0 1.23-1.232c.355-.663.355-1.538.355-3.289c0-2.918 0-4.377-.59-5.482a5 5 0 0 0-.621-.906"></svg:path><svg:path d="M12.5 18v-7c0-.929 0-1.394-.061-1.782a5 5 0 0 0-4.156-4.156a4 4 0 0 0-.26-.032"></svg:path></svg:g>`,
})
export class HugeiconsMailbox01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
