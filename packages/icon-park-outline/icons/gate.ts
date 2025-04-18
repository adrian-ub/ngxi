import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGateIcon],svg[icon-park-outline-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M13 10v25m22-25v25"></svg:path><svg:path d="M8 18h32"></svg:path><svg:path stroke-linejoin="round" d="M24 10v8m15-8H9L5 4s11.07 1 19 1s19-1 19-1zM10 35h6v9h-6zm22 0h6v9h-6z"></svg:path></svg:g>`,
})
export class IconParkOutlineGateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
