import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDistributeHorizontallyIcon],svg[icon-park-distribute-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="12" x="30" y="10" fill="#2F88FF" transform="rotate(90 30 10)"></svg:rect><svg:path stroke-linecap="round" d="M40 6V42"></svg:path><svg:path stroke-linecap="round" d="M8 6V42"></svg:path></svg:g>`,
})
export class IconParkDistributeHorizontallyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
