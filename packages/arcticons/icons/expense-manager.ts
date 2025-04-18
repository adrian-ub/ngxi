import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsExpenseManagerIcon],svg[arcticons-expense-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 5.768l18.5 11.166v19.994a5.29 5.29 0 0 1-5.28 5.304H10.804a5.29 5.29 0 0 1-5.304-5.28V16.934zm-6.197 18.35h12.394m-8.652-6.315h8.652"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.803 17.803h3.742a6.29 6.29 0 0 1 6.314 6.262v.053a6.29 6.29 0 0 1-6.262 6.314h-.052l6.314 6.08"></svg:path>`,
})
export class ArcticonsExpenseManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
