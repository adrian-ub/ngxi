import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTreadmillIcon],svg[icon-park-treadmill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M39.75 44.0001H9.31C6.38 44.0001 4 41.6201 4 38.6901V33.2701C4 32.0601 5.06 31.1301 6.25 31.2801L40.27 35.5301C42.4 35.8001 44 37.6101 44 39.7501C44 42.1001 42.1 44.0001 39.75 44.0001Z"></svg:path><svg:path d="M16 32L4 4H10.43"></svg:path><svg:path d="M6 31L12 23"></svg:path><svg:path d="M25 15H9"></svg:path></svg:g>`,
})
export class IconParkTreadmillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
