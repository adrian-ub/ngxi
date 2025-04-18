import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneAirConditioningIcon],svg[icon-park-twotone-air-conditioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTAirConditioning0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="20" x="4" y="8" rx="2"></svg:rect><svg:path fill="#555" d="M12 20h24v8H12z"></svg:path><svg:path d="M32 14h4M24 34v6m-8-4v2m16-2v2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAirConditioning0)"></svg:path>`,
})
export class IconParkTwotoneAirConditioningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
