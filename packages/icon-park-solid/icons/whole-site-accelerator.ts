import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWholeSiteAcceleratorIcon],svg[icon-park-solid-whole-site-accelerator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="22" cy="40" r="4" fill="currentColor"></svg:circle><svg:circle cx="26" cy="8" r="4" fill="currentColor"></svg:circle><svg:circle cx="36" cy="24" r="4" fill="currentColor"></svg:circle><svg:circle cx="12" cy="24" r="4" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 24H16m7-13l-8 10"></svg:path><svg:path d="m33 27l-8.001 10"></svg:path></svg:g>`,
})
export class IconParkSolidWholeSiteAcceleratorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
