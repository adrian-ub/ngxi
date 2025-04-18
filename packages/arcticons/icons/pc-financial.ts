import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPcFinancialIcon],svg[arcticons-pc-financial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.577 9.256a1.416 1.416 0 0 0-1.706-.904c-1.314.329-13.364 10.202-6.242 18.572c5.629 6.614 17.871-8.41 17.871-8.41"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.563 24.099c.635 3.898 3.964 17.192 6.701 15.44S22.51 27.125 18.643 24.82c-4.154-2.474-13.907-4.613-14.14-6.825c-.25-2.356 19.484-11.703 22.9-4.716s-8.19 14.41-8.19 14.41"></svg:path>`,
})
export class ArcticonsPcFinancialIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
