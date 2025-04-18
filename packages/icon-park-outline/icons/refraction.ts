import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRefractionIcon],svg[icon-park-outline-refraction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m24 9l16.454 28.5H7.545z"></svg:path><svg:path d="m24 9l16.454 28.5H7.545zM4 22l15.5-5m8.5-1l16-3m-14 6.5L44 21m-11.3 3L44 29"></svg:path></svg:g>`,
})
export class IconParkOutlineRefractionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
