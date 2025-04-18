import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouse08Icon],svg[hugeicons-mouse-08-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.192 18.071c.152 1.913 1.667 3.538 3.62 3.778c.718.089 1.448.151 2.188.151s1.47-.062 2.188-.15c1.953-.241 3.467-1.866 3.62-3.779c.105-1.326.192-2.685.192-4.071s-.087-2.745-.193-4.071c-.151-1.913-1.666-3.538-3.62-3.778A18 18 0 0 0 13 6c-.74 0-1.47.062-2.188.15c-1.953.241-3.468 1.866-3.62 3.779C7.087 11.255 7 12.614 7 14s.087 2.745.192 4.071"></svg:path><svg:path d="M13 9V7.5c0-1.886 0-2.828-.586-3.414S10.886 3.5 9 3.5H6.5A1.5 1.5 0 0 1 5 2m6.5 8.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C12.301 9 12.534 9 13 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C13.699 13 13.466 13 13 13s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883z"></svg:path></svg:g>`,
})
export class HugeiconsMouse08Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
