import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMiddlewareOutlineIcon],svg[mdi-middleware-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 12l-4-4v3h-3.14c-.45-1.72-2-3-3.86-3s-3.41 1.28-3.86 3H5L2 8v8l3-3h3.14c.45 1.72 2 3 3.86 3s3.41-1.28 3.86-3H19v3zm-11 2c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class MdiMiddlewareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
