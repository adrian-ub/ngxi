import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTransporterIcon],svg[icon-park-transporter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M42 8H20C18.8954 8 18 8.89543 18 10V32C18 33.1046 18.8954 34 20 34H42C43.1046 34 44 33.1046 44 32V10C44 8.89543 43.1046 8 42 8Z"></svg:path><svg:path fill="#2F88FF" d="M4 34H18V20H11L4 26.4615V34Z"></svg:path><svg:path stroke-linecap="round" d="M18 36C18 38.2091 16.2091 40 14 40C11.7909 40 10 38.2091 10 36"></svg:path><svg:path stroke-linecap="round" d="M40 36C40 38.2091 38.2091 40 36 40C33.7909 40 32 38.2091 32 36"></svg:path></svg:g>`,
})
export class IconParkTransporterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
