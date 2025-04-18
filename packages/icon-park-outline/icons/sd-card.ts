import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSdCardIcon],svg[icon-park-outline-sd-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M8 12v32h32V4H14z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M15 15v6m6-9v6m12-6v6m-6-6v6"></svg:path></svg:g>`,
})
export class IconParkOutlineSdCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
