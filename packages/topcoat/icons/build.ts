import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatBuildIcon],svg[topcoat-build-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 6.5c0-2.31-.439-3-3-3h-16c-2.56 0-3 .69-3 3v29c0 2.5.62 3 3 3h10v-2l9-8zm-17 2h12v24h-12zm7 28h-3v-2h3zm13.561-8.391L18.05 35.4c-1.04 1.108-2.7 2.01-1.16 3.898c1.28 1.57 2.969.12 3.93-.898l7.99-7.41zm12.048-3.048l-2.27 1.959l-1.91-1.97l.871-2.15l-2.14-2.682s-4.16-3.31-9.36-.05c2.341-.109 4.58 1.181 6.2 4.021l-2.189 2.121l2.75 2.629l1.799-1.619l2.201 1.93l-1.761 1.68l2.14 2.16l5.761-5.58z"></svg:path>`,
})
export class TopcoatBuildIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
