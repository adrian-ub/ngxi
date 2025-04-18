import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMirrorOneIcon],svg[icon-park-mirror-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="20" r="16" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 36V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 44H34"></svg:path></svg:g>`,
})
export class IconParkMirrorOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
