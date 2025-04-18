import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCastleIcon],svg[hugeicons-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.75 4h-7.5c-.702 0-1.053 0-1.306.169a1 1 0 0 0-.275.275C6.5 4.697 6.5 5.048 6.5 5.75s0 1.053.169 1.306a1 1 0 0 0 .275.275c.253.169.604.169 1.306.169h7.5c.702 0 1.053 0 1.306-.169a1 1 0 0 0 .275-.275c.169-.253.169-.604.169-1.306s0-1.053-.169-1.306a1 1 0 0 0-.275-.275C16.803 4 16.452 4 15.75 4M15 22l-.671-4.027c-.114-.681-.17-1.022-.336-1.28a1.5 1.5 0 0 0-.675-.573C13.036 16 12.691 16 12 16c-.69 0-1.036 0-1.318.12a1.5 1.5 0 0 0-.675.572c-.165.259-.222.6-.336 1.28L9 22"></svg:path><svg:path d="M16 7.5H8L6 22h12z"></svg:path><svg:path d="M17.794 22c2.127 0 3.19 0 3.788-.683c.598-.682.457-1.737.176-3.846l-.266-2C21.066 12.276 20.092 12 17 12M6.207 22c-2.128 0-3.192 0-3.79-.683c-.597-.682-.456-1.737-.175-3.846l.266-2C2.933 12.285 3.898 12 7 12m1-8V2m4 2V2m4 2V2"></svg:path></svg:g>`,
})
export class HugeiconsCastleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
