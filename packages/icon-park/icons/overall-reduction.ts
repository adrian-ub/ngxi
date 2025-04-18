import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOverallReductionIcon],svg[icon-park-overall-reduction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M15 15H33V33H15V15Z"></svg:path><svg:path d="M11 43V37H5"></svg:path><svg:path d="M37 43V37H43"></svg:path><svg:path d="M11 5V11H5"></svg:path><svg:path d="M37 5V11H43"></svg:path></svg:g>`,
})
export class IconParkOverallReductionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
