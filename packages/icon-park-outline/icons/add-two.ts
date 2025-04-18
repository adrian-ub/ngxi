import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAddTwoIcon],svg[icon-park-outline-add-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M33 7.263A18.9 18.9 0 0 0 24 5C13.507 5 5 13.507 5 24s8.507 19 19 19a18.9 18.9 0 0 0 8-1.761"></svg:path><svg:path stroke-linejoin="round" d="M31 30h12m-28-8l7 7l19-18m-4 13v12"></svg:path></svg:g>`,
})
export class IconParkOutlineAddTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
