import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkListTwoIcon],svg[icon-park-list-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 42C11.2091 42 13 40.2091 13 38C13 35.7909 11.2091 34 9 34C6.79086 34 5 35.7909 5 38C5 40.2091 6.79086 42 9 42Z"></svg:path><svg:path d="M9 14C11.2091 14 13 12.2092 13 10C13 7.79086 11.2091 6 9 6C6.79086 6 5 7.79086 5 10C5 12.2092 6.79086 14 9 14Z"></svg:path><svg:path d="M9 28C11.2091 28 13 26.2092 13 24C13 21.7908 11.2091 20 9 20C6.79086 20 5 21.7908 5 24C5 26.2092 6.79086 28 9 28Z"></svg:path><svg:path stroke-linecap="round" d="M21 24H43"></svg:path><svg:path stroke-linecap="round" d="M21 38H43"></svg:path><svg:path stroke-linecap="round" d="M21 10H43"></svg:path></svg:g>`,
})
export class IconParkListTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
