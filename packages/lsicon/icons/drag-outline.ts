import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDragOutlineIcon],svg[lsicon-drag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.75 4.75h.005v.005H9.75z"></svg:path><svg:path d="M10 4.75a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0m-.25 3.245h.005V8H9.75z"></svg:path><svg:path d="M10 7.995a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0m-.25 3.255h.005v.005H9.75z"></svg:path><svg:path d="M10 11.25a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0m-3.75-6.5h.005v.005H6.25z"></svg:path><svg:path d="M6.5 4.75a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0m-.25 3.245h.005V8H6.25z"></svg:path><svg:path d="M6.5 7.995a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0m-.25 3.255h.005v.005H6.25z"></svg:path><svg:path d="M6.5 11.25a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0"></svg:path></svg:g>`,
})
export class LsiconDragOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
