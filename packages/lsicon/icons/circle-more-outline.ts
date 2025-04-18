import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleMoreOutlineIcon],svg[lsicon-circle-more-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8 14.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M4.75 8h.005v.005H4.75z"></svg:path><svg:path d="M5 8a.25.25 0 1 1-.5 0A.25.25 0 0 1 5 8m3 0h.005v.005H8z"></svg:path><svg:path d="M8.25 8a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0m3 .005h.005v.005h-.005z"></svg:path><svg:path d="M11.5 8.005a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0"></svg:path></svg:g>`,
})
export class LsiconCircleMoreOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
