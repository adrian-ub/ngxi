import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBreastPumpIcon],svg[icon-park-outline-breast-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35 25c0-4-6-6-6-6v-5H17v5s-6 2-6 6v19h24zM20 4l-7 6m10 4l-6-7m9 1h9v7l6 5"></svg:path>`,
})
export class IconParkOutlineBreastPumpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
