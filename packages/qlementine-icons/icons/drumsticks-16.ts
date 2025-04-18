import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsDrumsticks16Icon],svg[qlementine-icons-drumsticks-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.176 11.6l12-8.43a.746.746 0 0 1 1.07.23a.82.82 0 0 1-.247 1.11l-12.4 7.8a.39.39 0 0 1-.544-.132a.43.43 0 0 1 .113-.571zM14.8 7.08L1.6 13.17c-.201.087-.301.331-.226.551c.076.219.299.333.504.257l13.6-5.42c.404-.15.626-.664.434-1.1c-.191-.439-.694-.544-1.09-.372z"></svg:path>`,
})
export class QlementineIconsDrumsticks16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
