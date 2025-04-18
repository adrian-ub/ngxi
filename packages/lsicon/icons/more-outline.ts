import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMoreOutlineIcon],svg[lsicon-more-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 8h.01v.01H4z"></svg:path><svg:path d="M4.5 8a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M8 8h.01v.01H8z"></svg:path><svg:path d="M8.5 8a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m3.49 0H12v.01h-.01z"></svg:path><svg:path d="M12.49 8a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path></svg:g>`,
})
export class LsiconMoreOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
