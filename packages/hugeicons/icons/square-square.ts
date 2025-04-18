import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSquareSquareIcon],svg[hugeicons-square-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M6.36 10.996c.36 0 1.352-.146 1.713.616c.415.878 1.457 3.861 1.706 4.46c.288.69.732 1.032 1.872.912"></svg:path><svg:path d="M12.006 10.984c-1.386 0-2.406 2.088-2.959 2.928c-.66 1.053-1.727 3.12-3.047 3.072M18 11h-3s2.005-1.32 2.224-1.47c.22-.151.776-.476.776-1.202C18 7.603 17.275 7 16.507 7C15.74 7 15 7.535 15 8.336"></svg:path></svg:g>`,
})
export class HugeiconsSquareSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
