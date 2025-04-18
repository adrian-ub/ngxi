import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidProtectionIcon],svg[icon-park-solid-protection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" stroke-linejoin="round" d="M42 24c0-9.389-8.059-17-18-17S6 14.611 6 24z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 24.008v14.537C24 41.558 21.514 44 18.5 44S13 41.558 13 38.545"></svg:path><svg:path stroke-linecap="round" d="M24 4v3"></svg:path></svg:g>`,
})
export class IconParkSolidProtectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
