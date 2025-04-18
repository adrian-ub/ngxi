import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBreastPumpIcon],svg[icon-park-breast-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M35 25C35 21 29 19 29 19V14H17V19C17 19 11 21 11 25V44H35V25Z"></svg:path><svg:path d="M20 4L13 10"></svg:path><svg:path d="M23 14L17 7"></svg:path><svg:path d="M26 8H35V15L41 20"></svg:path></svg:g>`,
})
export class IconParkBreastPumpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
