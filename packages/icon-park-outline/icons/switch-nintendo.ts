import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSwitchNintendoIcon],svg[icon-park-outline-switch-nintendo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="4" d="M6 12a8 8 0 0 1 8-8h5a2 2 0 0 1 2 2v34a2 2 0 0 1-2 2h-5a8 8 0 0 1-8-8zm36 2a8 8 0 0 0-8-8h-6a2 2 0 0 0-2 2v34a2 2 0 0 0 2 2h6a8 8 0 0 0 8-8z"></svg:path><svg:rect width="5" height="5" x="11" y="30" fill="currentColor" rx="2.5"></svg:rect><svg:rect width="5" height="5" x="31.5" y="14" fill="currentColor" rx="2.5"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 17h-3m22 11v6m-3-3h6"></svg:path></svg:g>`,
})
export class IconParkOutlineSwitchNintendoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
