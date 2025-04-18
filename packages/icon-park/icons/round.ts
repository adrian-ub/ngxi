import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRoundIcon],svg[icon-park-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle>`,
})
export class IconParkRoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
