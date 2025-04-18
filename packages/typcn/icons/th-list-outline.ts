import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnThListOutlineIcon],svg[typcn-th-list-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1zm0-2h-7c-1.654 0-3 1.346-3 3s1.346 3 3 3h7c1.654 0 3-1.346 3-3s-1.346-3-3-3m0-5c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1zm0-2h-7c-1.654 0-3 1.346-3 3s1.346 3 3 3h7c1.654 0 3-1.346 3-3s-1.346-3-3-3m0-5c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1zm0-2h-7c-1.654 0-3 1.346-3 3s1.346 3 3 3h7c1.654 0 3-1.346 3-3s-1.346-3-3-3M6 16H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2m0 4H4v-2h2zM6 9H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2m0 4H4v-2h2zM6 2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 4H4V4h2z"></svg:path>`,
})
export class TypcnThListOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
