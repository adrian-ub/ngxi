import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouseRightClick05Icon],svg[hugeicons-mouse-right-click-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 5.5V2m0 10V9m2.5-6.682C12.77 2.111 11.94 2 11 2C5 2 3.5 6.51 3.5 12S5 22 11 22s7.5-4.51 7.5-10q0-.765-.041-1.5"></svg:path><svg:path d="M12.5 7c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C11.699 5.5 11.466 5.5 11 5.5s-.699 0-.883.076a1 1 0 0 0-.54.541C9.5 6.301 9.5 6.534 9.5 7v.5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54C10.301 9 10.534 9 11 9s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883zM4 12h14"></svg:path><svg:circle cx="18" cy="5.5" r="2.5"></svg:circle></svg:g>`,
})
export class HugeiconsMouseRightClick05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
