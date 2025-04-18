import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRoadSignIcon],svg[icon-park-solid-road-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M6 10v12h32l6-6l-6-6z"></svg:path><svg:path stroke-linecap="round" d="M23 22v22m0-40v6m-5 34h10"></svg:path></svg:g>`,
})
export class IconParkSolidRoadSignIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
