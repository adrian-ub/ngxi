import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineApplicationOneIcon],svg[icon-park-outline-application-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M41 14L24 4L7 14v20l17 10l17-10z"></svg:path><svg:path stroke-linecap="round" d="M16 18.998L23.993 24l8.002-5.002M24 24v9"></svg:path></svg:g>`,
})
export class IconParkOutlineApplicationOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
