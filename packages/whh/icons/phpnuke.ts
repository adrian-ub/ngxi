import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPhpnukeIcon],svg[whh-phpnuke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 640h-64v128L384 576v-64h384q53 0 90.5-37.5T896 384t-37.5-90.5T768 256h-64V128h64q106 0 181 75t75 181t-75 181t-181 75M256 256q-53 0-90.5 37.5T128 384t37.5 90.5T256 512h64v128h-64q-106 0-181-75T0 384t75-181t181-75h64V0l320 192v64z"></svg:path>`,
})
export class WhhPhpnukeIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
