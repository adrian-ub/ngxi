import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMiddlewareIcon],svg[mdi-middleware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 12l-4-4v3h-4.18C14.4 9.84 13.3 9 12 9s-2.4.84-2.82 2H5L2 8v8l3-3h4.18c.42 1.16 1.52 2 2.82 2s2.4-.84 2.82-2H19v3z"></svg:path>`,
})
export class MdiMiddlewareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
