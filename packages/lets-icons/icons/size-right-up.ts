import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSizeRightUpIcon],svg[lets-icons-size-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3 9V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-3"></svg:path><svg:path fill="currentColor" d="M16 8V7h1v1zm-5.793 7.207a1 1 0 0 1-1.414-1.414zM15 14V8h2v6zm1-5h-6V7h6zm.707-.293l-6.5 6.5l-1.414-1.414l6.5-6.5z"></svg:path><svg:rect width="7" height="7" x="3" y="14" stroke="currentColor" stroke-linecap="round" stroke-width="2" rx="2"></svg:rect></svg:g>`,
})
export class LetsIconsSizeRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
