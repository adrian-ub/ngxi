import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAdd02Icon],svg[hugeicons-add-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.236 5.292c0-.52 0-.78-.057-.993a1.68 1.68 0 0 0-1.186-1.186c-.562-.15-1.424-.15-1.986 0A1.68 1.68 0 0 0 9.82 4.299c-.057.213-.057.473-.057.993c0 1.054 0 3.817-.328 4.144c-.327.328-3.09.328-4.144.328c-.52 0-.78 0-.993.057a1.68 1.68 0 0 0-1.186 1.186c-.15.562-.15 1.425 0 1.986c.155.579.607 1.03 1.186 1.186c.213.057.473.057.993.057c1.054 0 3.817 0 4.144.327c.328.328.328.855.328 1.91c0 .519 0 3.015.057 3.228a1.68 1.68 0 0 0 1.186 1.186c.562.15 1.425.15 1.986 0a1.68 1.68 0 0 0 1.186-1.186c.057-.213.057-2.709.057-3.229c0-1.054 0-1.581.327-1.909c.328-.327 3.091-.327 4.145-.327c.52 0 .78 0 .993-.057a1.68 1.68 0 0 0 1.186-1.186c.15-.562.15-1.424 0-1.986A1.68 1.68 0 0 0 19.7 9.821c-.213-.057-.473-.057-.993-.057c-1.054 0-3.817 0-4.144-.328c-.328-.327-.328-3.09-.328-4.144" color="currentColor"></svg:path>`,
})
export class HugeiconsAdd02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
