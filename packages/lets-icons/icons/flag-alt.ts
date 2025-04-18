import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFlagAltIcon],svg[lets-icons-flag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 15V5.5c0-.236 0-.354.073-.427S6.264 5 6.5 5h10.293c.514 0 .77 0 .834.154c.064.155-.117.336-.48.7l-3.864 3.863c-.133.133-.2.2-.2.283s.066.15.2.283l3.863 3.863c.364.364.545.545.481.7c-.063.154-.32.154-.834.154zm0 0v4"></svg:path>`,
})
export class LetsIconsFlagAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
