import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMoneyDuotoneLineIcon],svg[lets-icons-money-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M3.586 6.586C3 7.172 3 8.114 3 10v4c0 1.886 0 2.828.586 3.414S5.114 18 7 18h10c1.886 0 2.828 0 3.414-.586S21 15.886 21 14v-4c0-1.886 0-2.828-.586-3.414S18.886 6 17 6H7c-1.886 0-2.828 0-3.414.586M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path><svg:rect width="18" height="12" x="3" y="6" stroke="currentColor" stroke-width="1.2" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M6 9h2m8 6h2"></svg:path><svg:circle cx="12" cy="12" r="2.4" stroke="currentColor" stroke-width="1.2"></svg:circle></svg:g>`,
})
export class LetsIconsMoneyDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
