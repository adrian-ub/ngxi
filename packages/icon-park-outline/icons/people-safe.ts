import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePeopleSafeIcon],svg[icon-park-outline-people-safe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 9.256L24.009 4L42 9.256v10.778C42 31.362 34.75 40.419 24.003 44C13.253 40.42 6 31.36 6 20.029z"></svg:path><svg:circle cx="24" cy="18" r="5" stroke-linecap="round"></svg:circle><svg:path stroke-linecap="round" d="M32 31a8 8 0 1 0-16 0"></svg:path></svg:g>`,
})
export class IconParkOutlinePeopleSafeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
