import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSuterIcon],svg[token-branded-suter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#38276D" d="M7.06 10.14a.975.975 0 0 1 0-1.378l5.471-5.477a.974.974 0 1 1 1.377 1.38l-5.47 5.475a.97.97 0 0 1-1.377 0m9.879 3.72a.975.975 0 0 1 0 1.379l-5.471 5.476a.975.975 0 1 1-1.377-1.379l5.47-5.476a.974.974 0 0 1 1.377 0M6.706 15.03a.976.976 0 0 1 0-1.379l3.462-3.466a.976.976 0 0 1 1.377 0a.976.976 0 0 1 0 1.378L8.084 15.03a.973.973 0 0 1-1.377 0"></svg:path><svg:path fill="#A674FF" d="M17.293 8.97a.975.975 0 0 1 0 1.379l-3.463 3.466a.972.972 0 0 1-1.662-.689c0-.258.103-.506.285-.689l3.463-3.466a.97.97 0 0 1 1.377 0"></svg:path></svg:g>`,
})
export class TokenBrandedSuterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
