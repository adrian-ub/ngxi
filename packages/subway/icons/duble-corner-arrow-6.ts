import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDubleCornerArrow6Icon],svg[subway-duble-corner-arrow-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M197.8 128L302.5 23.3L0 0l23.3 302.5L128 197.8l58.2 58.2l69.8-69.8zM512 512l-23.3-302.5L384 314.2L325.8 256L256 325.8l58.2 58.2l-104.7 104.7z"></svg:path>`,
})
export class SubwayDubleCornerArrow6Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
