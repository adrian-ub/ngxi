import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsInfo24Icon],svg[qlementine-icons-info-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1m1.2-4a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M24 12c0 6.63-5.37 12-12 12S0 18.63 0 12S5.37 0 12 0s12 5.37 12 12m-1 0c0 6.08-4.92 11-11 11S1 18.08 1 12S5.92 1 12 1s11 4.92 11 11" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsInfo24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
