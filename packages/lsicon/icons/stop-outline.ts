import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconStopOutlineIcon],svg[lsicon-stop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"></svg:path><svg:path d="M6 6h4v4H6z"></svg:path></svg:g>`,
})
export class LsiconStopOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
