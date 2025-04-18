import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBeerIcon],svg[icon-park-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M25.5 19H33C34.1046 19 35 19.8954 35 21V44H13V21C13 19.8954 13.8954 19 15 19H17.5"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M17 8H14.5C11.4624 8 9 10.4624 9 13.5C9 16.5376 11.4624 19 14.5 19H19V29.5C19 30.8807 20.1193 32 21.5 32C22.8807 32 24 30.8807 24 29.5V19H33.5C36.5376 19 39 16.5376 39 13.5C39 10.4624 36.5376 8 33.5 8H29C29 8 28 4 23 4C18 4 17 8 17 8Z"></svg:path><svg:path d="M35 21H40C41.1046 21 42 21.8954 42 23V28C42 30.2091 40.2091 32 38 32H35"></svg:path></svg:g>`,
})
export class IconParkBeerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
