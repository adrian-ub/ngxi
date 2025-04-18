import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouse12Icon],svg[hugeicons-mouse-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c5.6 0 7-3.834 7-8.5S17.6 5 12 5s-7 3.833-7 8.5S6.4 22 12 22m0-14V2"></svg:path><svg:path d="M10.5 9.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C11.301 8 11.534 8 12 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 12 12.466 12 12 12s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883z"></svg:path></svg:g>`,
})
export class HugeiconsMouse12Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
