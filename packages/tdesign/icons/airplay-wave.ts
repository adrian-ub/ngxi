import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAirplayWaveIcon],svg[tdesign-airplay-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v17h-5.5v-2H21V5H3l.001 13h3.5v2H1zm15.95 10.383a7 7 0 0 0-9.9 0l-.706.707l-1.414-1.414l.707-.707a9 9 0 0 1 12.728 0l.707.707l-1.415 1.414zm-2.828 2.828a3 3 0 0 0-4.243 0l-.707.707l-1.414-1.414l.707-.707a5 5 0 0 1 7.07 0l.708.707l-1.414 1.414zM12 18.086L15.914 22H8.086z"></svg:path>`,
})
export class TdesignAirplayWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
