import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkReverseOperationOutIcon],svg[icon-park-reverse-operation-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="18" height="32" x="6" y="5" fill="#2F88FF" stroke="#000"></svg:rect><svg:rect width="18" height="32" x="24" y="11" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#fff" d="M17 17L13 20.7895L16.6667 25"></svg:path><svg:path stroke="#fff" d="M31 23L35 26.7895L31.3333 31"></svg:path></svg:g>`,
})
export class IconParkReverseOperationOutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
