import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDegreeHatIcon],svg[icon-park-degree-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M2 17.4L23.0222 9L44.0444 17.4L23.0222 25.8L2 17.4Z"></svg:path><svg:path stroke-linecap="round" d="M44.0444 17.51V26.7332"></svg:path><svg:path stroke-linecap="round" d="M11.5557 21.8252V34.2666C11.5557 34.2666 16.3658 38.9999 23.0224 38.9999C29.679 38.9999 34.4891 34.2666 34.4891 34.2666V21.8252"></svg:path></svg:g>`,
})
export class IconParkDegreeHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
