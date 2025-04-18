import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDam6FilledIcon],svg[tdesign-dam-6-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3v4H2v2h20V6h-1zm0 8H3v10H2v2h8.5v-2h-1v-4.5a2.5 2.5 0 0 1 5 0V20h-1v2H22v-2h-1z"></svg:path>`,
})
export class TdesignDam6FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
