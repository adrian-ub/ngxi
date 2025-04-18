import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSoftDrink02Icon],svg[hugeicons-soft-drink-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.632 18.263L5.031 6.1C4.91 5.188 5.116 5 6.126 5h10.749c1.01 0 1.214.188 1.094 1.1l-1.601 12.163c-.218 1.655-.327 2.483-.954 2.98c-1.297 1.031-6.587.987-7.828 0c-.627-.497-.736-1.325-.954-2.98"></svg:path><svg:path d="m13.5 19l.446-16.059A1 1 0 0 1 14.944 2h4.057"></svg:path><svg:path d="M6 10c.182-.333.782-1 2.09-1c1.637 0 1.205 1 2.296 1s2.728-1 4.364-1s2.75 1 2.75 1m-7.491 6H10"></svg:path></svg:g>`,
})
export class HugeiconsSoftDrink02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
