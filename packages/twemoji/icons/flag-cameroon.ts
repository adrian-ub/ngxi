import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagCameroonIcon],svg[twemoji-flag-cameroon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CC212D" d="M12 5v26h12V5zm7.882 15.59L18 19.223l-1.882 1.367l.719-2.212l-1.882-1.367h2.326L18 14.798l.719 2.212h2.326l-1.882 1.367z"></svg:path><svg:path fill="#288541" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z"></svg:path><svg:path fill="#FEE833" d="M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4M18.719 17.011L18 14.798l-.719 2.213h-2.326l1.882 1.367l-.719 2.212L18 19.223l1.882 1.367l-.719-2.212l1.882-1.367z"></svg:path>`,
})
export class TwemojiFlagCameroonIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
