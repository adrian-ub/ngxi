import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkKeyOneIcon],svg[icon-park-key-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="15" cy="33" r="8" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 16L35.5 22"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 26L37 7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 11L42 17.5"></svg:path></svg:g>`,
})
export class IconParkKeyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
