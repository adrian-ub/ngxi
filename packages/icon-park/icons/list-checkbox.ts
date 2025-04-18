import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkListCheckboxIcon],svg[icon-park-list-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M20 24H44H20Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 24H44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M20 38H44H20Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 38H44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M20 10H44H20Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 10H44"></svg:path><svg:rect width="8" height="8" x="4" y="34" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:rect width="8" height="8" x="4" y="20" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:rect width="8" height="8" x="4" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"></svg:rect></svg:g>`,
})
export class IconParkListCheckboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
