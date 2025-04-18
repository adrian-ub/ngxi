import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUnorderedListIcon],svg[grommet-icons-unordered-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.94 6.42H24v1.75H5.94zm0 5.29H24v1.75H5.94zm0 5.28H24v1.75H5.94z"></svg:path><svg:circle cx="1.85" cy="7.29" r="1.52" fill="currentColor"></svg:circle><svg:circle cx="1.85" cy="12.58" r="1.52" fill="currentColor"></svg:circle><svg:circle cx="1.85" cy="17.87" r="1.52" fill="currentColor"></svg:circle>`,
})
export class GrommetIconsUnorderedListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
