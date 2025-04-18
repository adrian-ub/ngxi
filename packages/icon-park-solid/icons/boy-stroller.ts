import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBoyStrollerIcon],svg[icon-park-solid-boy-stroller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M40 24H12l2.5 10H36z"></svg:path><svg:path d="m12 24l-4-9H3.5"></svg:path><svg:circle cx="20" cy="41" r="3" fill="currentColor"></svg:circle><svg:circle cx="31" cy="41" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m23 8l9 16h8l4-11c-2.333-3-7-9-10-9c-4 0-8.333 2.667-11 4"></svg:path><svg:path d="m29 5l4 7"></svg:path></svg:g>`,
})
export class IconParkSolidBoyStrollerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
