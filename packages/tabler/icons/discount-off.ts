import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDiscountOffIcon],svg[tabler-discount-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m9 15l3-3m2-2l1-1m-5.852.145A.498.498 0 0 0 9.5 10a.5.5 0 0 0 .35-.142m4.298 4.287A.498.498 0 0 0 14.5 15a.5.5 0 0 0 .35-.142"></svg:path><svg:path d="M5.641 5.631A9 9 0 1 0 18.36 18.369m1.68-2.318A9 9 0 0 0 7.966 3.953M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerDiscountOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
