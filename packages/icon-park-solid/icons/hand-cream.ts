import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHandCreamIcon],svg[icon-park-solid-hand-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path fill="currentColor" d="M19 17c-2.731 1.137-2.488 4.578-2 6h14c3.902-5.687-4.216-11.849-4.216-9.479S22.414 15.578 19 17"></svg:path><svg:path d="M13 23h22v8H13z"></svg:path></svg:g>`,
})
export class IconParkSolidHandCreamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
