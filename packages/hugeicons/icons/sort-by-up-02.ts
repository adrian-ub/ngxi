import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSortByUp02Icon],svg[hugeicons-sort-by-up-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15h11M3 9h7M3 21h16m-.5-18v12m0-12c-.7 0-2.009 1.994-2.5 2.5M18.5 3c.7 0 2.009 1.994 2.5 2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsSortByUp02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
