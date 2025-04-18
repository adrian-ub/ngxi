import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCityOneIcon],svg[icon-park-twotone-city-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCityOne0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 42h40"></svg:path><svg:rect width="12" height="20" x="8" y="22" fill="#555" rx="2"></svg:rect><svg:rect width="20" height="38" x="20" y="4" fill="#555" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M28 32.008h4m-20 0h4m12-9h4m-4-9h4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCityOne0)"></svg:path>`,
})
export class IconParkTwotoneCityOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
