import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidIndustrialScalesIcon],svg[icon-park-solid-industrial-scales-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M10 32h28l4 8H6z"></svg:path><svg:path stroke-linecap="round" d="M16 40v4m8-32v20"></svg:path><svg:path fill="currentColor" d="M17 4h14v8H17z"></svg:path><svg:path stroke-linecap="round" d="M32 40v4"></svg:path></svg:g>`,
})
export class IconParkSolidIndustrialScalesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
