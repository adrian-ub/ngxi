import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouse22Icon],svg[hugeicons-mouse-22-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c6 0 7.5-4.51 7.5-10S18 2 12 2S4.5 6.51 4.5 12S6 22 12 22"></svg:path><svg:path d="M10.5 7.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C11.301 6 11.534 6 12 6s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v2c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 11 12.466 11 12 11s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883zM12 6V2"></svg:path></svg:g>`,
})
export class HugeiconsMouse22Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
