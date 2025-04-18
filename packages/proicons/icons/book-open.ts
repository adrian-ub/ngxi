import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBookOpenIcon],svg[proicons-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 7.21a2 2 0 0 1 2-2H8.5a3.5 3.5 0 0 1 3.5 3.5v10.885l-1.015-.721a4 4 0 0 0-2.318-.74H4.75a2 2 0 0 1-2-2zm18.5 0a2 2 0 0 0-2-2H15.5a3.5 3.5 0 0 0-3.5 3.5v10.885l1.015-.721a4 4 0 0 1 2.317-.74h3.918a2 2 0 0 0 2-2z"></svg:path>`,
})
export class ProiconsBookOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
