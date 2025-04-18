import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkCloudSucessIcon],svg[icon-park-link-cloud-sucess-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 33C8.66666 33 4 31.5 4 25.5C4 18.5 11 17 13 17C14 13.5 16 8 24 8C31 8 34 12 35 15.5C35 15.5 44 16.5 44 25C44 31 40 33 36 33"></svg:path><svg:path d="M18 33L24 38L32 28"></svg:path></svg:g>`,
})
export class IconParkLinkCloudSucessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
