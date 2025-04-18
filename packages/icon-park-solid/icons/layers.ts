import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidLayersIcon],svg[icon-park-solid-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M4 11.914L24 19l20-7.086L24 5z"></svg:path><svg:path stroke-linecap="round" d="m4 20l20 7l20-7M4 28l20 7l20-7M4 36l20 7l20-7"></svg:path></svg:g>`,
})
export class IconParkSolidLayersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
