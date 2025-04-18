import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMoneyFillIcon],svg[lets-icons-money-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.586 5.586C2 6.172 2 7.114 2 9v6c0 1.886 0 2.828.586 3.414S4.114 19 6 19h12c1.886 0 2.828 0 3.414-.586S22 16.886 22 15V9c0-1.886 0-2.828-.586-3.414S19.886 5 18 5H6c-1.886 0-2.828 0-3.414.586M5 7a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm11 9a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m-3-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsMoneyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
