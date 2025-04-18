import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouseLeftClick05Icon],svg[hugeicons-mouse-left-click-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 2.318C10.73 2.111 11.56 2 12.5 2c6 0 7.5 4.51 7.5 10s-1.5 10-7.5 10S5 17.49 5 12q0-.765.041-1.5"></svg:path><svg:path d="M14 7c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077s-.699 0-.883.076a1 1 0 0 0-.54.541C11 6.301 11 6.534 11 7v.5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541C14 8.199 14 7.966 14 7.5zm-1.5-1.5V2m0 10V9m-7 3h14"></svg:path><svg:circle cx="5.5" cy="5.5" r="2.5"></svg:circle></svg:g>`,
})
export class HugeiconsMouseLeftClick05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
