import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMiniSdCardIcon],svg[icon-park-outline-mini-sd-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M13.998 18.739L8 21.923V44h32V4H13.998z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M21 12v6m12-6v6m-6-6v6"></svg:path></svg:g>`,
})
export class IconParkOutlineMiniSdCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
