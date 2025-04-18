import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconShieldX24Icon],svg[octicon-shield-x-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.28 7.72a.75.75 0 0 0-1.06 1.06l2.72 2.72l-2.72 2.72a.75.75 0 1 0 1.06 1.06L12 12.56l2.72 2.72a.75.75 0 1 0 1.06-1.06l-2.72-2.72l2.72-2.72a.75.75 0 0 0-1.06-1.06L12 10.44z"></svg:path><svg:path fill="currentColor" d="m12.54.637l8.25 2.675A1.75 1.75 0 0 1 22 4.976V10c0 6.19-3.771 10.704-9.401 12.83a1.7 1.7 0 0 1-1.198 0C5.77 20.705 2 16.19 2 10V4.976c0-.758.489-1.43 1.21-1.664L11.46.637a1.75 1.75 0 0 1 1.08 0m-.617 1.426l-8.25 2.676a.25.25 0 0 0-.173.237V10c0 5.46 3.28 9.483 8.43 11.426a.2.2 0 0 0 .14 0C17.22 19.483 20.5 15.461 20.5 10V4.976a.25.25 0 0 0-.173-.237l-8.25-2.676a.25.25 0 0 0-.154 0"></svg:path>`,
})
export class OcticonShieldX24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
