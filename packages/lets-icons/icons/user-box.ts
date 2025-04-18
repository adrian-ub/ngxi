import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserBoxIcon],svg[lets-icons-user-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M17.796 20.706c-.342-1.063-1.096-2.003-2.143-2.673C14.605 17.363 13.32 17 12 17s-2.605.363-3.653 1.033c-1.047.67-1.8 1.61-2.143 2.673"></svg:path><svg:circle cx="12" cy="10" r="3" stroke-linecap="round"></svg:circle><svg:rect width="18" height="18" x="3" y="3" rx="3"></svg:rect></svg:g>`,
})
export class LetsIconsUserBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
