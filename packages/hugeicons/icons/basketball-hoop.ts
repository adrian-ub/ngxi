import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBasketballHoopIcon],svg[hugeicons-basketball-hoop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 17c-.628-.135-1.121-.351-1.538-.698a4 4 0 0 1-.554-.563C2 14.616 2 12.95 2 9.612s0-5.005.908-6.128a4 4 0 0 1 .554-.563C4.57 2 6.212 2 9.5 2h5c3.288 0 4.931 0 6.038.921q.304.255.554.563C22 4.607 22 6.275 22 9.612c0 3.336 0 5.004-.908 6.127a4 4 0 0 1-.554.563c-.417.347-.91.563-1.538.698M6 13h1.333m0 0L8.5 22m-1.167-9H12m6 0h-1.333m0 0L15.5 22m1.167-9H12m0 0v9"></svg:path><svg:path d="M8 10c.059-1.952 1.262-2 2.998-2h2.004c1.736 0 2.94.048 2.998 2m-8 6.5h8M8.444 20h7.112"></svg:path></svg:g>`,
})
export class HugeiconsBasketballHoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
