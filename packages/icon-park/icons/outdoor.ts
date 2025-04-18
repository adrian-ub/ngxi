import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutdoorIcon],svg[icon-park-outdoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 42L18 10L28 34L32 22L44 42H4Z"></svg:path><svg:path d="M37 14C39.7614 14 42 11.7614 42 9C42 6.23858 39.7614 4 37 4C34.2386 4 32 6.23858 32 9C32 11.7614 34.2386 14 37 14Z"></svg:path></svg:g>`,
})
export class IconParkOutdoorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
