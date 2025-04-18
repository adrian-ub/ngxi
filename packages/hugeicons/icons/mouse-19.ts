import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouse19Icon],svg[hugeicons-mouse-19-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2v3m0 4v2m0-9a6 6 0 0 0-5.764 7.672c.425 1.468.58 3.27.2 4.75c-.119.46-.232.938-.386 1.424a1 1 0 0 0-.048.317a6 6 0 0 0 11.996 0a1 1 0 0 0-.048-.317c-.153-.486-.267-.964-.385-1.424c-.38-1.48-.226-3.282.199-4.75A6 6 0 0 0 12 2"></svg:path><svg:path d="M10.5 6.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C11.301 5 11.534 5 12 5s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 9 12.466 9 12 9s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883z"></svg:path></svg:g>`,
})
export class HugeiconsMouse19Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
