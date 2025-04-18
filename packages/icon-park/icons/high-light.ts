import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHighLightIcon],svg[icon-park-high-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M6 44L6 25H12V17H36V25H42V44H6Z"></svg:path><svg:path stroke-linecap="round" d="M17 17V8L31 4V17"></svg:path></svg:g>`,
})
export class IconParkHighLightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
