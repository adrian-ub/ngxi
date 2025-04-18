import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPieOneIcon],svg[icon-park-pie-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path fill="#2F88FF" d="M24 4C26.7322 4 29.4355 4.55981 31.943 5.64491C34.4505 6.73 36.709 8.31736 38.5794 10.3091L24 24V4Z"></svg:path></svg:g>`,
})
export class IconParkPieOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
