import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaRefreshOutlineIcon],svg[cuida-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="refresh-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M17.501 8.196c-1.873-3.246-6.008-4.358-9.234-2.494a6.7 6.7 0 0 0-2.804 3.137A1 1 0 1 1 3.63 8.04a8.7 8.7 0 0 1 3.637-4.07c4.188-2.42 9.544-.971 11.966 3.225a8.8 8.8 0 0 1 1.112 3.303l-1.984.25a6.8 6.8 0 0 0-.86-2.552"></svg:path><svg:path d="M21.268 7.489c.43.2.616.71.416 1.138l-1.227 2.635a1.086 1.086 0 0 1-1.445.523l-2.636-1.236a.857.857 0 1 1 .728-1.551l2.064.969l.96-2.064a.857.857 0 0 1 1.14-.414M6.499 15.804c1.873 3.246 6.008 4.358 9.234 2.494a6.7 6.7 0 0 0 2.804-3.137a1 1 0 1 1 1.833.799a8.7 8.7 0 0 1-3.637 4.07c-4.188 2.42-9.545.971-11.966-3.225a8.8 8.8 0 0 1-1.112-3.303l1.984-.25c.11.873.39 1.74.86 2.552"></svg:path><svg:path d="M2.732 16.511a.857.857 0 0 1-.416-1.138l1.227-2.635a1.086 1.086 0 0 1 1.445-.523l2.635 1.236a.857.857 0 1 1-.727 1.551l-2.064-.969l-.96 2.064a.857.857 0 0 1-1.14.414"></svg:path></svg:g></svg:g>`,
})
export class CuidaRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
