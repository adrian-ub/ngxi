import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFilterIcon],svg[icon-park-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M6 9L20.4 25.8178V38.4444L27.6 42V25.8178L42 9H6Z"></svg:path>`,
})
export class IconParkFilterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
