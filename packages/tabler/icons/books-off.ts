import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBooksOffIcon],svg[tabler-books-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 9v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5m3-1a1 1 0 0 1 1 1m0 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4m0 4v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9M5 8h3m1 8h4"></svg:path><svg:path d="M14.254 10.244L13.036 5.82a1.02 1.02 0 0 1 .634-1.219l.133-.041l2.184-.53c.562-.135 1.133.19 1.282.732l3.236 11.75m-.92 3.077l-1.572.38c-.562.136-1.133-.19-1.282-.731l-.952-3.458M14 9l4-1m1.207 7.199l.716-.18M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerBooksOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
