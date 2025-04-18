import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArhiveLoadFillIcon],svg[lets-icons-arhive-load-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16v-5c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 14 5.068 14 6 14h.675c.581 0 .872 0 1.104.134a1 1 0 0 1 .164.118c.2.178.292.453.476 1.005l.125.376c.22.66.33.99.592 1.178c.262.189.61.189 1.306.189h3.117c.695 0 1.043 0 1.305-.189s.372-.518.592-1.178l.125-.376c.184-.552.276-.827.476-1.005a1 1 0 0 1 .164-.118c.232-.134.523-.134 1.104-.134H18c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 12.398 21 11.932 21 11" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M16 6h1c1.886 0 2.828 0 3.414.586S21 8.114 21 10v8c0 1.886 0 2.828-.586 3.414S18.886 22 17 22H7c-1.886 0-2.828 0-3.414-.586S3 19.886 3 18v-8c0-1.886 0-2.828.586-3.414S5.114 6 7 6h1m0 4l4 3m0 0l4-3m-4 3V3"></svg:path></svg:g>`,
})
export class LetsIconsArhiveLoadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
