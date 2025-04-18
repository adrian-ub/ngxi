import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBachelorCapIcon],svg[icon-park-outline-bachelor-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m4 13l20-5l20 5l-20 5z"></svg:path><svg:path d="M13 16v9.97S18 29 24 29s11-3.03 11-3.03V16M7 14v22m-3-2h6v6H4z"></svg:path></svg:g>`,
})
export class IconParkOutlineBachelorCapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
