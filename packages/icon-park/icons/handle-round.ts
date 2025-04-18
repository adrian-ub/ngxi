import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHandleRoundIcon],svg[icon-park-handle-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:circle cx="24" cy="24" r="12" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkHandleRoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
