import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkNodeRoundIcon],svg[icon-park-node-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 42V27M42 24H27"></svg:path><svg:circle cx="24" cy="24" r="3"></svg:circle><svg:path d="M42 6H24C14.0589 6 6 14.0589 6 24V42"></svg:path></svg:g>`,
})
export class IconParkNodeRoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
