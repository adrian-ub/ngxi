import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAirConditioningIcon],svg[icon-park-outline-air-conditioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="20" x="4" y="8" rx="2"></svg:rect><svg:path d="M12 20h24v8H12zm20-6h4M24 34v6m-8-4v2m16-2v2"></svg:path></svg:g>`,
})
export class IconParkOutlineAirConditioningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
