import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGoBackward15SecIcon],svg[hugeicons-go-backward-15-sec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m12 5l-1.104-1.545c-.41-.576-.617-.864-.487-1.13c.13-.268.46-.283 1.12-.314Q11.763 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.99 9.99 0 0 1 4-8"></svg:path><svg:path d="M8 11c.528-.42 1.008-1.113 1.308-.984c.3.128.204.552.204 1.212v4.776M16 10h-2.64a.5.5 0 0 0-.49.402l-.366 2.102c.636-.264.957-.361 1.673-.361c1.036 0 1.927.637 1.825 1.957c.018 1.56-1.242 1.92-1.825 1.9c-.584-.02-1.517.2-1.677-1"></svg:path></svg:g>`,
})
export class HugeiconsGoBackward15SecIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
