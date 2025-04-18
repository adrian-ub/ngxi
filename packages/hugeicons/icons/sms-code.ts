import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSmsCodeIcon],svg[hugeicons-sms-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.644 4a2.7 2.7 0 0 0-.626-.975C16.984 2 15.322 2 12 2S7.015 2 5.982 3.025A2.7 2.7 0 0 0 5.356 4M5 18c.087 1.42.326 2.323.982 2.975C7.015 22 8.677 22 12 22s4.985 0 6.017-1.025c.657-.652.896-1.556.983-2.975M6 10l2 2m0-2l-2 2m5-2l2 2m0-2l-2 2m5-2l2 2m0-2l-2 2m1-5H7c-1.886 0-2.828 0-3.414.586S3 9.114 3 11s0 2.828.586 3.414S5.114 15 7 15h10c1.886 0 2.828 0 3.414-.586S21 12.886 21 11s0-2.828-.586-3.414S18.886 7 17 7m-5 12v.01" color="currentColor"></svg:path>`,
})
export class HugeiconsSmsCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
