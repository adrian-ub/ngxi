import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRefreshOutlineIcon],svg[lsicon-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.232 11A6.5 6.5 0 0 1 12 2.876L9.5 4M7 12l-3.08 1.06a6.5 6.5 0 0 0 9.485-8.672"></svg:path>`,
})
export class LsiconRefreshOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
