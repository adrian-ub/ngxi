import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkNoodlesIcon],svg[icon-park-noodles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M4 24C4 35.0457 10.6667 44 24 44C37.3333 44 44 35.0457 44 24H4Z" clip-rule="evenodd"></svg:path><svg:path d="M16 24V8"></svg:path><svg:path d="M24 24V6"></svg:path><svg:path d="M32 24V4"></svg:path><svg:path d="M8 24V10"></svg:path><svg:path d="M4 13L44 4"></svg:path></svg:g>`,
})
export class IconParkNoodlesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
