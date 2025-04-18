import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFogSunnyIcon],svg[tdesign-fog-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v3h-2V1zm7.485 3.928L18.364 7.05L16.95 5.636l2.121-2.122zM4.93 3.514l2.12 2.122L5.636 7.05L3.515 4.929zM12 8a4 4 0 0 0-3.668 5.6l.4.916l-1.832.8l-.4-.916a6 6 0 1 1 11 0l-.4.917l-1.833-.801l.4-.916A4 4 0 0 0 12 8M1 11h3v2H1zm19 0h3v2h-3zM2 17h6v2H2zm8 0h12v2H10zm7 4h5v2h-5zM2 21h13v2H2z"></svg:path>`,
})
export class TdesignFogSunnyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
