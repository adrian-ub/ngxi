import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidClickIcon],svg[icon-park-solid-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 4v8"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m22 22l20 4l-6 4l6 6l-6 6l-6-6l-4 6z" clip-rule="evenodd"></svg:path><svg:path d="m38.142 9.858l-5.657 5.657M9.858 38.142l5.657-5.657M4 24h8M9.858 9.858l5.657 5.657"></svg:path></svg:g>`,
})
export class IconParkSolidClickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
