import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonArchiveIcon],svg[carbon-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M6 2v26a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2Zm18 26H8V16h16Zm0-14H8v-4h16ZM8 8V4h16v4Z"></svg:path>`,
})
export class CarbonArchiveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
