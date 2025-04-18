import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageUnlockedIcon],svg[mage-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.376 9.69V7.378a4.624 4.624 0 0 1 7.895-3.272q.294.29.52.636m-7.259 13.04h6.936"></svg:path><svg:path d="M17 9.688H7c-1.38 0-2.5 1.035-2.5 2.312v6.938c0 1.277 1.12 2.312 2.5 2.312h10c1.38 0 2.5-1.035 2.5-2.312V12c0-1.277-1.12-2.312-2.5-2.312"></svg:path></svg:g>`,
})
export class MageUnlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
