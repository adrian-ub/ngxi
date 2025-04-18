import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEfferentFourIcon],svg[icon-park-outline-efferent-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 5H10a2 2 0 0 0-2 2v34a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V24.75M28 5h12v12m-19 7L39 6"></svg:path>`,
})
export class IconParkOutlineEfferentFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
