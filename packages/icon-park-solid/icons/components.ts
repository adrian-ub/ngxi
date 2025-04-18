import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidComponentsIcon],svg[icon-park-solid-components-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m17 11l7-7l7 7l-7 7zm13 14l7-7l7 7l-7 7zM17 37l7-7l7 7l-7 7zM4 24l7-7l7 7l-7 7z"></svg:path>`,
})
export class IconParkSolidComponentsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
