import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilAnchorIcon],svg[uil-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13h-2a1 1 0 0 0 0 2h.91A6 6 0 0 1 13 19.91V11h1a1 1 0 0 0 0-2h-1V7.82a3 3 0 1 0-2 0V9h-1a1 1 0 0 0 0 2h1v8.91A6 6 0 0 1 6.09 15H7a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1a8 8 0 0 0 16 0a1 1 0 0 0-1-1m-7-7a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class UilAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
