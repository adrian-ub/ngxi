import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAppSwitchIcon],svg[icon-park-app-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M34 4H14V44H34V4Z"></svg:path><svg:path d="M44 8H34V40H44V8Z"></svg:path><svg:path d="M14 8H4V40H14V8Z"></svg:path></svg:g>`,
})
export class IconParkAppSwitchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
