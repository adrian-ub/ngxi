import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUnorderedListIcon],svg[icon-park-unordered-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 18V27"></svg:path><svg:path d="M11 27H5"></svg:path><svg:path d="M11 12H5"></svg:path><svg:path d="M5 4.99994C5 4.99994 8 1.99992 10 4.99996C12 8 5 12 5 12"></svg:path><svg:path d="M5.00065 34.5001C5.00065 34.5001 7.00065 31.5001 10.0006 33.5C13.0006 35.5 10.0007 38 10.0007 38C10.0007 38 13.0006 40.5001 10.0006 42.5001C7.00064 44.5001 5.00064 41.5001 5.00064 41.5001"></svg:path><svg:path d="M10 38H8"></svg:path><svg:path d="M8 18L5 20"></svg:path><svg:path d="M20 24H42"></svg:path><svg:path d="M20 38H42"></svg:path><svg:path d="M20 10H42"></svg:path></svg:g>`,
})
export class IconParkUnorderedListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
