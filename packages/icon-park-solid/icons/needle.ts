import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidNeedleIcon],svg[icon-park-solid-needle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M39 23L25 9m19 8L31 4m3.999 14.999l5-5m-11-1l5-5M11 37l-5 5"></svg:path><svg:path fill="currentColor" d="M28 12L12 28l-1 9l9-1l16-16z"></svg:path></svg:g>`,
})
export class IconParkSolidNeedleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
