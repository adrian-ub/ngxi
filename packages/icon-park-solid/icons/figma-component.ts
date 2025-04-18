import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFigmaComponentIcon],svg[icon-park-solid-figma-component-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m17 12l7-7l7 7l-7 7zm0 24l7-7l7 7l-7 7zm12-12l7-7l7 7l-7 7zM5 24l7-7l7 7l-7 7z"></svg:path>`,
})
export class IconParkSolidFigmaComponentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
