import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPieIcon],svg[icon-park-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path fill="#2F88FF" d="M24 4C26.5207 4 29.0188 4.47652 31.3625 5.40447L24 24V4Z"></svg:path></svg:g>`,
})
export class IconParkPieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
