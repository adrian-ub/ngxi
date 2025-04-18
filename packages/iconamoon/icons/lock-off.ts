import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonLockOffIcon],svg[iconamoon-lock-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-width="2" d="M8 10V7a4 4 0 0 1 7.874-1"></svg:path><svg:path stroke-linejoin="round" stroke-width="2" d="M5 10h14v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-linejoin="round" stroke-width="3" d="M14.5 15.5h.01v.01h-.01z"></svg:path></svg:g>`,
})
export class IconamoonLockOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
