import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookCheckDuotoneLineIcon],svg[lets-icons-book-check-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M16 16H8.415c-1.184 0-1.776 0-2.299.202q-.412.16-.76.43c-.442.344-.747.852-1.356 1.868V7c0-1.886 0-2.828.586-3.414S6.114 3 8 3h8c1.886 0 2.828 0 3.414.586S20 5.114 20 7v5c0 1.886 0 2.828-.586 3.414S17.886 16 16 16"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M20 12v5c0 1.886 0 2.828-.586 3.414S17.886 21 16 21H6.5a2.5 2.5 0 0 1 0-5H16c1.886 0 2.828 0 3.414-.586S20 13.886 20 12V7c0-1.886 0-2.828-.586-3.414S17.886 3 16 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v11.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="m9 10l1.293 1.293a1 1 0 0 0 1.414 0L15 8"></svg:path></svg:g>`,
})
export class LetsIconsBookCheckDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
