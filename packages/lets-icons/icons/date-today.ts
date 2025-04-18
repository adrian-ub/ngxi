import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDateTodayIcon],svg[lets-icons-date-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="18" height="15" x="3" y="6" stroke="currentColor" stroke-width="2" rx="2"></svg:rect><svg:path fill="currentColor" d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 3v3m10-3v3"></svg:path></svg:g>`,
})
export class LetsIconsDateTodayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
