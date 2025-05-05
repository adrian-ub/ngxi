import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserWarning01Icon],svg[hugeicons-user-warning-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M19.506 18.936c2.046-1.866-2.921-4.38-2.921-4.38A10.3 10.3 0 0 0 12 13.5a10.3 10.3 0 0 0-4.585 1.057s-4.967 2.514-2.92 4.38c.999.911 2.112 1.563 3.512 1.563h7.986c1.4 0 2.513-.652 3.513-1.564M15.5 7a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M19 5v4m0 3v.01" color="currentColor"></svg:path>`,
})
export class HugeiconsUserWarning01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
