import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFolderSearchIcon],svg[lets-icons-folder-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M20 12c0-1.886 0-2.828-.586-3.414S17.886 8 16 8h-1.343c-.818 0-1.226 0-1.594-.152s-.657-.442-1.235-1.02l-.656-.656c-.578-.578-.867-.868-1.235-1.02S9.16 5 8.343 5H8c-1.886 0-2.828 0-3.414.586S4 7.114 4 9v6c0 1.886 0 2.828.586 3.414S6.114 19 8 19h3"></svg:path><svg:circle cx="16.5" cy="16.5" r="2.5"></svg:circle><svg:path stroke-linecap="round" d="M19.5 19.5L21 21"></svg:path></svg:g>`,
})
export class LetsIconsFolderSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
