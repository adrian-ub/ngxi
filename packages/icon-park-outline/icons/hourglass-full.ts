import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHourglassFullIcon],svg[icon-park-outline-hourglass-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M7 4h34M7 44h34"></svg:path><svg:path d="M11 44q4-20.009 13-20t13 20z"></svg:path><svg:path d="M37 4q-4 20.009-13 20T11 4z"></svg:path><svg:path stroke-linecap="round" d="M21 15h6m-8 23h10"></svg:path></svg:g>`,
})
export class IconParkOutlineHourglassFullIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
