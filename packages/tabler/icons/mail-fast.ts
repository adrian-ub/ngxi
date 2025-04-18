import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMailFastIcon],svg[tabler-mail-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 7h3m-3 4h2m4.02-2.199l-.6 6A2 2 0 0 0 10.41 17h7.98a2 2 0 0 0 1.99-1.801l.6-6A2 2 0 0 0 18.99 7h-7.98a2 2 0 0 0-1.99 1.801"></svg:path><svg:path d="m9.8 7.5l2.982 3.28a3 3 0 0 0 4.238.202L20.3 8"></svg:path></svg:g>`,
})
export class TablerMailFastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
