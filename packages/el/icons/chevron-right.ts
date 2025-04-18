import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elChevronRightIcon],svg[el-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M989.368 600.011L810.633 421.275L389.367 0L210.632 178.721l421.267 421.29l-421.267 421.267L389.355 1200l421.266-421.267L989.345 600.01z"></svg:path>`,
})
export class ElChevronRightIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
