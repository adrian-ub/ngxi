import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTangerineIcon],svg[arcticons-tangerine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.787 8.346l-32.39-.002c-1.822 0-3.16 2.636.022 3.638c9.459 2.638 17.664 10.643 14.085 25.085c-.587 2.193 1.796 4.161 4.049.736c1.82-3.154 16.563-25.919 16.563-25.919c.898-1.564.261-3.539-2.329-3.539z"></svg:path>`,
})
export class ArcticonsTangerineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
