import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSleepOneIcon],svg[icon-park-sleep-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M7 6H24.1429L7 24H25"></svg:path><svg:path d="M29 15H41L29 29H41"></svg:path><svg:path d="M15 32H24.0476L15 42H25"></svg:path></svg:g>`,
})
export class IconParkSleepOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
