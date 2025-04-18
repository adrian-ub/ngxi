import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUndo03Icon],svg[hugeicons-undo-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.992 7.549H4.142c.42-.46 1.17-1.02 2.16-1.77l1.15-.88a.749.749 0 1 0-.91-1.19l-1.15.88c-2.03 1.54-3.15 2.38-3.15 3.72s1.12 2.18 3.14 3.72l1.15.88c.14.1.3.15.46.15c.23 0 .45-.1.6-.29c.25-.33.19-.8-.14-1.05l-1.15-.88c-.99-.75-1.73-1.31-2.15-1.77h10.85c2.89 0 5.25 2.35 5.25 5.25s-2.36 5.25-5.25 5.25h-4c-.41 0-.75.34-.75.75s.34.75.75.75h4c3.72 0 6.75-3.03 6.75-6.75s-3.03-6.75-6.75-6.75z" color="currentColor"></svg:path>`,
})
export class HugeiconsUndo03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
