import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineIronDisableIcon],svg[icon-park-outline-iron-disable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 40h40l-2-16H20c-8.837 0-16 7.163-16 16M16 8h24l2 16"></svg:path><svg:circle cx="24" cy="24" r="9"></svg:circle><svg:path d="m26 26l-2-2l-2-2m4 0l-2 2l-2 2"></svg:path></svg:g>`,
})
export class IconParkOutlineIronDisableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
