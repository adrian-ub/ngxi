import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMoonFallIcon],svg[tdesign-moon-fall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.916 1.585l-.45 1.675c-.3 1.116-.27 2.337.07 3.604a7 7 0 0 0 9.84 4.476l1.541-.752l-.104 1.71c-.062 1.034-.374 2.06-.919 3.15l-.447.894l-1.789-.895l.448-.894q.198-.398.338-.76A9 9 0 0 1 8.604 7.38a9.6 9.6 0 0 1-.338-2.852a8 8 0 0 0-4.164 9.235c.016.061.085.251.173.48l.106.267l.033.082l.009.022l.003.007l.378.926l-1.852.756l-.378-.926l-.004-.01l-.01-.024l-.036-.09l-.113-.288a8 8 0 0 1-.24-.684C.74 8.947 3.906 3.464 9.24 2.034zM1 18h8.303L12 19.798L14.697 18H23v2h-7.697L12 22.202L8.697 20H1z"></svg:path>`,
})
export class TdesignMoonFallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
