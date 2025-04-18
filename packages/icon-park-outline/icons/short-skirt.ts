import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineShortSkirtIcon],svg[icon-park-outline-short-skirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m12 9l5-5h14l5 5l7 26s-3 9-19 9s-19-9-19-9zm1 33l4-16"></svg:path><svg:path d="M5 35s3 9 19 9"></svg:path></svg:g>`,
})
export class IconParkOutlineShortSkirtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
