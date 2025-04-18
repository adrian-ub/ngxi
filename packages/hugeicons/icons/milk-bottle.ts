import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMilkBottleIcon],svg[hugeicons-milk-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.727 5c.904 0 1.637-.672 1.637-1.5S15.63 2 14.727 2H9.273c-.904 0-1.637.672-1.637 1.5S8.37 5 9.273 5m5.973-.077C16.866 7.894 18 10.377 18 13.777V18c0 3.31-.753 4-4.364 4h-3.272C6.754 22 6 21.31 6 18v-4.223c0-3.4 1.107-5.891 2.727-8.862"></svg:path><svg:path d="M6 12c.571.5 2.092.476 2.984.279c.622-.137 1.293.024 1.714.485l.825.902a2.12 2.12 0 0 0 1.902.651l1.043-.167c.574-.092 1.145.14 1.536.556C17.223 16 18 16 18 16"></svg:path></svg:g>`,
})
export class HugeiconsMilkBottleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
