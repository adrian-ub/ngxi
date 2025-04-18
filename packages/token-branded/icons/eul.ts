import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEulIcon],svg[token-branded-eul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#37BEC1" d="M3.45 9.86a1.794 1.794 0 0 1 .822-2.369l8.9-4.32a1.72 1.72 0 0 1 2.317.844a1.794 1.794 0 0 1-.821 2.362l-8.9 4.327a1.723 1.723 0 0 1-2.317-.844"></svg:path><svg:path fill="#FAB244" d="M4.019 15.98a1.93 1.93 0 0 1 .855-2.514l5.963-2.97c.9-.45 1.969-.05 2.396.894a1.93 1.93 0 0 1-.855 2.515l-5.963 2.97c-.9.45-1.969.05-2.396-.894"></svg:path><svg:path fill="#E5615D" d="M8.513 19.985a1.794 1.794 0 0 1 .821-2.368l8.9-4.32a1.72 1.72 0 0 1 2.317.843a1.795 1.795 0 0 1-.82 2.363l-8.9 4.326a1.72 1.72 0 0 1-2.318-.844"></svg:path></svg:g>`,
})
export class TokenBrandedEulIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
