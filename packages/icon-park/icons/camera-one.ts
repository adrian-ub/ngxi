import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCameraOneIcon],svg[icon-park-camera-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="19" r="14"></svg:circle><svg:circle cx="24" cy="19" r="6" fill="#2F88FF"></svg:circle><svg:path d="M17 31L11 43H37L31 31"></svg:path></svg:g>`,
})
export class IconParkCameraOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
