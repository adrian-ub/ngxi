import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineIncognitoModeIcon],svg[streamline-incognito-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.499 11.242a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m6.502 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0"></svg:path><svg:path d="M5.998 11.242s0-1 1-1s1.001 1 1.001 1M.5 6.5h13M2.86 1.336A1 1 0 0 1 3.848.5h6.306a1 1 0 0 1 .986.836L12 6.5H2z"></svg:path></svg:g>`,
})
export class StreamlineIncognitoModeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
