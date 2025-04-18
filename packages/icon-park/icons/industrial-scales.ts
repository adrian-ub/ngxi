import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkIndustrialScalesIcon],svg[icon-park-industrial-scales-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M10 32H38L42 40H6L10 32Z"></svg:path><svg:path stroke-linecap="round" d="M16 40V44"></svg:path><svg:path stroke-linecap="round" d="M24 12V32"></svg:path><svg:rect width="14" height="8" x="17" y="4" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M32 40V44"></svg:path></svg:g>`,
})
export class IconParkIndustrialScalesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
