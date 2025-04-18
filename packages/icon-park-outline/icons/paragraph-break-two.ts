import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineParagraphBreakTwoIcon],svg[icon-park-outline-paragraph-break-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 9h36M6 19h36M6 29h18M6 39h10m8 0h13a5 5 0 0 0 0-10h-5m-8 10l4-4m-4 4l4 4"></svg:path>`,
})
export class IconParkOutlineParagraphBreakTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
