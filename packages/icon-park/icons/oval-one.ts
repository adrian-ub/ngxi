import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOvalOneIcon],svg[icon-park-oval-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="24" fill="#2F88FF" stroke="#000" stroke-width="4" rx="14" ry="20"></svg:ellipse>`,
})
export class IconParkOvalOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
