import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxRefreshAltRightIcon],svg[lets-icons-box-refresh-alt-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="m12 12l4 4l-4 4"></svg:path><svg:path stroke-linecap="round" d="M13 8h4m-1 8H8a4 4 0 0 1-4-4v0a4 4 0 0 1 4-4h1"></svg:path></svg:g>`,
})
export class LetsIconsBoxRefreshAltRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
