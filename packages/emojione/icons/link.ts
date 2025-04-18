import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLinkIcon],svg[emojione-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#94989b"><svg:path d="M36.1 41.5c1.2 1.2 1.3 3 .2 4.1L18.7 63.3c-1.1 1.1-2.9.9-4.1-.2L1 49.4c-1.2-1.2-1.3-3-.2-4.1l17.7-17.7c1.1-1.1 2.9-.9 4.1.2c1.2 1.2 1.3 3 .2 4.1L8.9 45.8c-1.1 1.1-.9 2.9.2 4.1l5 5c1.2 1.2 3 1.3 4.1.2L32 41.3c1.1-1.1 3-1 4.1.2M63 14.6c1.2 1.2 1.3 3 .2 4.1L45.6 36.4c-1.1 1.1-2.9.9-4.1-.2c-1.2-1.2-1.3-3-.2-4.1l13.8-13.8c1.1-1.1.9-2.9-.2-4.1l-5-5c-1.2-1.2-3-1.3-4.1-.2L31.9 22.7c-1.1 1.1-2.9.9-4.1-.2c-1.2-1.2-1.3-3-.2-4.1L45.3.7c1.1-1.1 2.9-.9 4.1.2z"></svg:path><svg:path d="M44.5 19.5c1.2 1.2 1.3 3 .2 4.1L23.6 44.7c-1.1 1.1-2.9.9-4.1-.2c-1.2-1.2-1.3-3-.2-4.1l21.1-21.1c1.1-1.1 2.9-1 4.1.2"></svg:path></svg:g>`,
})
export class EmojioneLinkIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
