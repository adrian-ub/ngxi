import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPlayOutlineIcon],svg[lsicon-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"></svg:path><svg:path d="M11 8L6.5 5v6z"></svg:path></svg:g>`,
})
export class LsiconPlayOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
