import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserCicrleLightIcon],svg[lets-icons-user-cicrle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="10" r="3" stroke-linecap="round"></svg:circle><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path stroke-linecap="round" d="M18 18.706c-.354-1.063-1.134-2.003-2.219-2.673S13.367 15 12 15s-2.697.363-3.781 1.033S6.354 17.643 6 18.706"></svg:path></svg:g>`,
})
export class LetsIconsUserCicrleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
