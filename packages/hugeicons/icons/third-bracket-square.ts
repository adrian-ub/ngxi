import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThirdBracketSquareIcon],svg[hugeicons-third-bracket-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 16c.924 0 1.673-.512 1.673-1.143c0-1.22.014-1.723 1.082-2.453c.327-.223.327-.585 0-.808c-1.068-.73-1.082-1.232-1.082-2.453C15.673 8.512 14.924 8 14 8m-4 8c-.924 0-1.673-.512-1.673-1.143c0-1.22-.014-1.723-1.082-2.453c-.327-.223-.327-.585 0-.808c1.068-.73 1.082-1.232 1.082-2.453C8.327 8.512 9.076 8 10 8"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsThirdBracketSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
