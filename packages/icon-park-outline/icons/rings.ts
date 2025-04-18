import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRingsIcon],svg[icon-park-outline-rings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path stroke-linecap="round" d="M13 43c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8m22 0c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8M6 5h36"></svg:path><svg:path stroke-linecap="square" d="M13 27V5m22 22V5"></svg:path><svg:path stroke-linecap="round" d="M9 19h8m14 0h8"></svg:path></svg:g>`,
})
export class IconParkOutlineRingsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
