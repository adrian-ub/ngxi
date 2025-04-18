import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCapitolIcon],svg[streamline-capitol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.262 8.831H.857l6.202-3.544zM.857 13.261h12.405M1.743 8.831v4.43M4.4 8.831v4.43m2.66-4.43v4.43m2.657-4.43v4.43m2.659-4.43v4.43"></svg:path><svg:path d="M3.515 7.296V5.73a3.544 3.544 0 1 1 7.088 0v1.566M7.06 2.185V.856"></svg:path></svg:g>`,
})
export class StreamlineCapitolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
