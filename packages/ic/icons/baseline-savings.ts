import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineSavingsIcon],svg[ic-baseline-savings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.83 7.5l-2.27-2.27c.07-.42.18-.81.32-1.15A1.498 1.498 0 0 0 16.5 2c-1.64 0-3.09.79-4 2h-5C4.46 4 2 6.46 2 9.5S4.5 21 4.5 21H10v-2h2v2h5.5l1.68-5.59l2.82-.94V7.5zM13 9H8V7h5zm3 2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcBaselineSavingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
