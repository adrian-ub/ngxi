import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouse17Icon],svg[hugeicons-mouse-17-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 5V2m0 10V9M8.873 3.333l1.46-.874a3.25 3.25 0 0 1 3.333 0l1.461.874c3.72 2.222 4.973 6.997 2.821 10.747a.7.7 0 0 0-.076.206l-.638 3.389c-.06.318-.09.477-.125.616a4.905 4.905 0 0 1-4.478 3.7C12.488 22 12.325 22 12 22s-.488 0-.631-.008A4.905 4.905 0 0 1 6.89 18.29a12 12 0 0 1-.125-.616l-.638-3.389a.7.7 0 0 0-.076-.206C3.9 10.33 5.153 5.555 8.872 3.333"></svg:path><svg:path d="M18 15a7.44 7.44 0 0 0-6-3a7.44 7.44 0 0 0-6 3m4.5-8.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C11.301 5 11.534 5 12 5s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 9 12.466 9 12 9s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883z"></svg:path></svg:g>`,
})
export class HugeiconsMouse17Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
