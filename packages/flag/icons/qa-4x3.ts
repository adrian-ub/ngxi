import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagQa4x3Icon],svg[flag-qa-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8d1b3d" d="M0 0h640v480H0z"></svg:path><svg:path fill="#fff" d="M0 0v480h158.4l97.8-26.7l-97.8-26.6l97.7-26.7l-97.7-26.7l97.7-26.6l-97.7-26.7l97.8-26.7l-97.8-26.6l97.7-26.7l-97.7-26.7l97.7-26.6l-97.7-26.7l97.8-26.7l-97.8-26.6L256.1 80l-97.7-26.7l97.8-26.6L158.3 0z"></svg:path>`,
})
export class FlagQa4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
