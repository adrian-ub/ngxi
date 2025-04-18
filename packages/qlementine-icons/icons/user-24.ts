import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsUser24Icon],svg[qlementine-icons-user-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10c0 2.21-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 24c6.63 0 12-5.37 12-12S18.63 0 12 0S0 5.37 0 12s5.37 12 12 12m6.27-2.96C21.13 19.05 23 15.75 23 12c0-6.08-4.92-11-11-11S1 5.92 1 12c0 3.75 1.87 7.05 4.73 9.04C6.435 19.72 8.71 16 12 16s5.56 3.72 6.27 5.04" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsUser24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
