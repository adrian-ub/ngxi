import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidNestedArrowsIcon],svg[icon-park-solid-nested-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 17V4H4v26h13"></svg:path><svg:path fill="currentColor" d="M43 43V17H17v26z"></svg:path><svg:path d="M33 30H17m16 0l-5-5zm0 0l-5 5zM17 17v26"></svg:path></svg:g>`,
})
export class IconParkSolidNestedArrowsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
