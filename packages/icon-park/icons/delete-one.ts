import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDeleteOneIcon],svg[icon-park-delete-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M15 12L16.2 5H31.8L33 12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 12H42"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M37 12L35 43H13L11 12H37Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 35H29"></svg:path></svg:g>`,
})
export class IconParkDeleteOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
