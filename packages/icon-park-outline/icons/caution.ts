import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCautionIcon],svg[icon-park-outline-caution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M24 5L2 43h44z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M24 35v1m0-17l.008 10"></svg:path></svg:g>`,
})
export class IconParkOutlineCautionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
