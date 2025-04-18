import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleStarOutlineIcon],svg[lsicon-circle-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m8 5l.955 1.935l2.136.31l-1.546 1.507l.365 2.127L8 9.875l-1.91 1.004l.365-2.127l-1.546-1.506l2.136-.31z"></svg:path><svg:path d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"></svg:path></svg:g>`,
})
export class LsiconCircleStarOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
