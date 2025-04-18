import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSweaterIcon],svg[icon-park-sweater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M14 37H6V24L11 9L19 4H24H29L38 9L42 24V37H34V44H24H14V37Z"></svg:path><svg:path d="M34 28V37"></svg:path><svg:path d="M14 28V37"></svg:path></svg:g>`,
})
export class IconParkSweaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
