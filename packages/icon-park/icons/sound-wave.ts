import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSoundWaveIcon],svg[icon-park-sound-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 14V12C6 8.68629 8.68629 6 12 6H36C39.3137 6 42 8.68629 42 12V14"></svg:path><svg:path d="M32 18V30"></svg:path><svg:path d="M40 20V28"></svg:path><svg:path d="M24 15V33"></svg:path><svg:path d="M16 18V30"></svg:path><svg:path d="M8 20V28"></svg:path><svg:path d="M6 34V36C6 39.3137 8.68629 42 12 42H36C39.3137 42 42 39.3137 42 36V34"></svg:path></svg:g>`,
})
export class IconParkSoundWaveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
