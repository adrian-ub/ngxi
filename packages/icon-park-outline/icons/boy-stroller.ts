import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBoyStrollerIcon],svg[icon-park-outline-boy-stroller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 24H12l2.5 10H36zm-28 0l-4-9H3.5"></svg:path><svg:circle cx="20" cy="41" r="3"></svg:circle><svg:circle cx="31" cy="41" r="3"></svg:circle><svg:path d="m23 8l9 16h8l4-11c-2.333-3-7-9-10-9c-4 0-8.333 2.667-11 4m6-3l4 7"></svg:path></svg:g>`,
})
export class IconParkOutlineBoyStrollerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
