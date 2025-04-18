import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenGamefiIcon],svg[token-gamefi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.01L4.992 3L8.4 6.444l.012-.006l1.986 2.01v.012l-1.986 2.01l-.012-.006l-3.408 3.444L3 11.898l3.414-3.444zm18 7.092l-1.992-2.01l-3.408 3.444l-.012-.006l-1.986 2.01v.012l1.986 2.01l.012-.006L19.008 21L21 18.99l-3.414-3.444zm-7.2 6.888L11.82 21L8.4 17.556L4.992 21L3 18.99l3.414-3.444l-.012-.006L8.4 13.53l.006.006l.012-.006l1.986 2.01v.006zM18.798 3l1.992 2.01l-3.408 3.444l.006.006l-1.992 2.01l-.006-.006l-.012.006l-1.986-2.01l.006-.006L9.984 5.01L11.97 3l3.414 3.444L18.792 3z"></svg:path>`,
})
export class TokenGamefiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
