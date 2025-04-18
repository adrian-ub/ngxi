import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPotIcon],svg[icon-park-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M34 28L44 24"></svg:path><svg:path fill="#2F88FF" d="M4 28H34L33.5613 31.8024C33.1537 35.3345 30.163 38 26.6074 38H11.3926C7.83703 38 4.84629 35.3345 4.43873 31.8024L4 28Z"></svg:path><svg:path d="M19 10V20"></svg:path><svg:path d="M11 12V18"></svg:path><svg:path d="M27 12V18"></svg:path></svg:g>`,
})
export class IconParkPotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
