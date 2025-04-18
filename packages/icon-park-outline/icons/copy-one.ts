import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCopyOneIcon],svg[icon-park-outline-copy-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M13 38h28V16H30V4H13zM30 4l11 12"></svg:path><svg:path stroke-linejoin="round" d="M7 20v24h21"></svg:path><svg:path d="M19 20h4m-4 8h12"></svg:path></svg:g>`,
})
export class IconParkOutlineCopyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
